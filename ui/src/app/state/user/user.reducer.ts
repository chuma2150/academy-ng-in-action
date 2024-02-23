import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../services";
import { setUser } from "./user.actions";

export interface UserState {
  user: User | undefined;
}

export const initialState: UserState = {
  user: undefined
};

export const userReducer = createReducer<UserState, Action>(
  initialState,
  on(setUser, (_, { user }) => ({ user: user}))
)
