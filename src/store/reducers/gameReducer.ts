import { AppRootStateType, BaseThunkType, InferActionsTypes } from "../store";
import { deckApi, IRandomCardsResponse } from "../../core/deck-api";
import { CardPosition } from "../../components/Board/Board";
import { gameResult } from "../../utils/helpers";

export interface IUser {
  username: string;
  deckId: string;
  count: number;
}

export enum statusType {
  win = "win",
  lose = "lose",
  draw = "draw",
}

export enum loadingType {
  idle = "idle",
  loading = "loading",
  error = "error",
}

type InitialStateType = {
  user: IUser;
  gameData: IRandomCardsResponse | null;
  statusGame?: statusType;
  loading: loadingType;
};

const initialState: InitialStateType = {
  user: {
    username: "",
    deckId: "",
    count: 0,
  },
  gameData: null,
  statusGame: undefined,
  loading: loadingType.idle,
};

export const actions = {
  setLoadingAC: (status: loadingType) =>
    ({ type: "SET-LOADING", status } as const),
  setUserAC: (user: IUser) => ({ type: "SET-USER", user } as const),
  setRateAC: (rate: number) => ({ type: "SET-RATE", rate } as const),
  setWinAC: (rate: number) => ({ type: "SET-WIN", rate } as const),
  setGameDataAC: (data: IRandomCardsResponse | null) =>
    ({ type: "SET-GAME-DATA", data } as const),
  setStatusGameAC: (status: statusType) =>
    ({ type: "SET-STATUS-GAME", status } as const),
};

export const gameReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "SET-USER":
      return { ...state, user: action.user };
    case "SET-RATE":
      return {
        ...state,
        user: { ...state.user, count: state.user.count - action.rate },
      };
    case "SET-WIN":
      return {
        ...state,
        user: { ...state.user, count: state.user.count + action.rate },
      };
    case "SET-GAME-DATA":
      return { ...state, gameData: action.data };
    case "SET-STATUS-GAME":
      return { ...state, statusGame: action.status };
    case "SET-LOADING":
      return { ...state, loading: action.status };
    default:
      return state;
  }
};

export const nextGameTC = (): ThunkType => {
  return async (dispatch, getState: () => AppRootStateType) => {
    dispatch(actions.setLoadingAC(loadingType.loading));
    try {
      const { gameData, user } = getState().game;

      const data = await deckApi.returnCards(
        user.deckId,
        gameData!.cards[0].code,
        gameData!.cards[1].code
      );
      if (data.success) {
        dispatch(actions.setGameDataAC(null));
      }
      await deckApi.setShuffleCards(user.deckId);
      dispatch(actions.setLoadingAC(loadingType.idle));
    } catch (e) {
      console.log(e);
      dispatch(actions.setLoadingAC(loadingType.error));
    }
  };
};

export const setPlayTC = (rate: number, card: CardPosition): ThunkType => {
  return async (dispatch, getState: () => AppRootStateType) => {
    dispatch(actions.setLoadingAC(loadingType.loading));
    try {
      const { deckId } = getState().game.user;

      const data = await deckApi.setRandomCards(deckId);
      if (data.success) {
        dispatch(actions.setGameDataAC(data));
        const leftCard = data.cards[0].value;
        const rightCard = data.cards[1].value;

        const result = gameResult(card, leftCard, rightCard);
        if (result === statusType.win) {
          dispatch(actions.setWinAC(rate));
          dispatch(actions.setStatusGameAC(statusType.win));
        } else if (result === statusType.lose) {
          dispatch(actions.setRateAC(rate));
          dispatch(actions.setStatusGameAC(statusType.lose));
        } else {
          dispatch(actions.setStatusGameAC(statusType.draw));
        }
      }
      dispatch(actions.setLoadingAC(loadingType.idle));
    } catch (e) {
      dispatch(actions.setLoadingAC(loadingType.error));
      console.log(e);
    }
  };
};

type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
