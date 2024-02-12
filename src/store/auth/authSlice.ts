import { createSlice } from "@reduxjs/toolkit";
import tokenService from "../../core/services/tokenService";
import { store } from "../configureStore";
import { platformActions } from "../platform/platformSlice";

const getInitialState = () => {
	if (tokenService.hasToken()) return { isAuthenticated: true };

	return { isAuthenticated: false };
};
export interface StateModel {
	auth: {
		isAuthenticated: boolean
	}
}

const authSlice = createSlice({
	name: "auth",
	initialState: getInitialState(),
	reducers: {
		login: (state) => {
			state.isAuthenticated = tokenService.hasToken();
		},
		logout: (state) => {
			tokenService.removeToken();			
			state.isAuthenticated = false;			
		}
	},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
