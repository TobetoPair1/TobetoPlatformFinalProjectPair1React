import {createSlice} from "@reduxjs/toolkit";
import tokenService from "../../core/services/tokenService";

const getInitialState = () => {
	if (tokenService.hasToken()) return {isAuthenticated: true};

	return {isAuthenticated: false};
};
export interface StateModel{
	auth:{
		isAuthenticated:boolean
	}
}

const authSlice = createSlice({
	name: "auth",
	initialState: getInitialState(),
	reducers: {
		login: (state) => {
			 state.isAuthenticated=tokenService.hasToken();
			 state.isAuthenticated=true;
		},
	},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
