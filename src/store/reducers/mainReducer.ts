import { BaseThunkType, InferActionsTypes } from "../store";
import { deckApi } from "../../core/deck-api";
import { actions as actionsGame } from "./gameReducer";

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

type InitialStateType = {
  isAuth: boolean;
  startGame: boolean;
};

const initialState: InitialStateType = {
  isAuth: false,
  startGame: false,
};

export const actions = {
  loginAC: (isAuth: boolean) => ({ type: "LOGIN", isAuth } as const),
  logoutAC: (isAuth: boolean) => ({ type: "LOGOUT", isAuth } as const),
  setStartGameAC: (value: boolean) =>
    ({ type: "SET-START_GAME", value } as const),
};

export const mainReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuth: action.isAuth };
    case "LOGOUT":
      return { ...state, isAuth: action.isAuth };
    case "SET-START_GAME":
      return { ...state, startGame: action.value };
    default:
      return state;
  }
};

export const startGameTC = (): ThunkType => {
  return async (dispatch) => {
    try {
      const data = await deckApi.setNewDeck();
      if (data.success) {
        dispatch(
          actionsGame.setUserAC({
            username: "admin",
            count: 1000,
            deckId: data.deck_id,
          })
        );
        dispatch(actions.setStartGameAC(true));
      }
    } catch (e) {
      console.log(e);
    }
  };
};

type ActionsTypes =
  | InferActionsTypes<typeof actions>
  | InferActionsTypes<typeof actionsGame>;
type ThunkType = BaseThunkType<ActionsTypes>;
