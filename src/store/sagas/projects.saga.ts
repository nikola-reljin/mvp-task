import { all, call, put } from "redux-saga/effects";
import { apiService, IServerResponse } from "../../services/api";
import { actions } from "../actions";
import { AxiosResponse } from "axios";
import { IProject } from "../../models/IProject";

export function* fetchProjects() {
  try {
    const response: AxiosResponse<IServerResponse<IProject[]>> = yield call(
      apiService.projects.getAll
    );
    yield all(
      response.data.data.map((project) =>
        put(actions.payments.get({ projectId: project.projectId }))
      )
    );
    yield put(actions.projects.getAllSuccess(response.data.data));
  } catch (e) {
    yield put(actions.projects.getAllError(e as string));
  }
}
