import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {loadingReducer} from "./loading/loadingSlice";
import { platformReducer } from "./platform/platformSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
	platform:platformReducer
});

export const store = configureStore({reducer: rootReducer});
