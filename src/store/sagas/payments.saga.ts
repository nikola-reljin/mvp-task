import { call, put } from "redux-saga/effects";
import { apiService, IServerResponse } from "../../services/api";
import { actions } from "../actions";
import { AxiosResponse } from "axios";
import { IPayment } from "../../models/IPayment";

export function* fetchPayments({ type, ...params }: any) {
  try {
    const response: AxiosResponse<IServerResponse<IPayment[]>> = yield call(
      apiService.payments.getAll,
      params
    );
    yield put(
      actions.payments.getSuccess(params.projectId, response.data.data as any)
    );
  } catch (e) {
    yield put(actions.payments.getError(e as string));
  }
}
