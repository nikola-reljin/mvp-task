import produce from "immer";
import { EProjectActions } from "../actions";
import { IProjectsState } from "../state";
import { IProject } from "../../models/IProject";

const initialState: IProjectsState = {
  isLoading: false,
  byId: {},
  allIds: [],
};

export const projectReducer = (
  state: IProjectsState = initialState,
  action: any
) =>
  produce<IProjectsState>((draft: IProjectsState) => {
    switch (action.type) {
      case EProjectActions.GET_ALL:
        draft.isLoading = true;
        draft.error = undefined;
        break;
      case EProjectActions.GET_ALL_ERROR:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case EProjectActions.GET_ALL_SUCCESS:
        draft.isLoading = false;
        action.data.forEach((project: IProject) => {
          draft.allIds.push(project.projectId);
          draft.byId[project.projectId] = project;
        });
        break;
    }
  })(state);
