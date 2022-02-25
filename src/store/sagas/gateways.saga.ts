import { call, put } from "redux-saga/effects";
import { apiService, IServerResponse } from "../../services/api";
import { IGateway } from "../../models/IGateway";
import { actions } from "../actions";
import { AxiosResponse } from "axios";

export function* fetchGateways() {
  try {
    const response: AxiosResponse<IServerResponse<IGateway[]>> = yield call(
      apiService.gateways.getAll
    );
    yield put(actions.gateways.getAllSuccess(response.data.data));
  } catch (e) {
    yield put(actions.gateways.getAllError(e as string));
  }
}
