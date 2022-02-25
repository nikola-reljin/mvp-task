import { takeEvery } from "redux-saga/effects";
import { EGatewaysActions, EPaymentActions, EProjectActions } from "../actions";
import { fetchGateways } from "./gateways.saga";
import { fetchProjects } from "./projects.saga";
import { fetchPayments } from "./payments.saga";

function* watchAll() {
  yield takeEvery(EProjectActions.GET_ALL, fetchProjects);
  yield takeEvery(EGatewaysActions.GET_ALL, fetchGateways);
  yield takeEvery(EPaymentActions.GET, fetchPayments);
}

export default watchAll;
