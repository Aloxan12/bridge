import { combineReducers, createStore, applyMiddleware, Action } from "redux";

import thunk, { ThunkAction } from "redux-thunk";
import { mainReducer } from "./reducers/mainReducer";
import { gameReducer } from "./reducers/gameReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  game: gameReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppRootStateType, unknown, A>;
