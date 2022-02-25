import { combineReducers } from "redux";
import { IAppState } from "../state";
import { projectReducer } from "./projects.reducer";
import { gatewaysReducer } from "./gateways.reducer";
import { paymentsReducer } from "./payments.reducer";

export const appReducer = combineReducers<IAppState>({
  projects: projectReducer,
  gateways: gatewaysReducer,
  payments: paymentsReducer,
});
