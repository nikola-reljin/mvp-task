import produce from "immer";
import { EGatewaysActions, EPaymentActions } from "../actions";
import { IPaymentsState } from "../state";

const initialState: IPaymentsState = {
  byProjectId: {},
  allIds: [],
};

export const paymentsReducer = (
  state: IPaymentsState = initialState,
  action: any
) =>
  produce((draft: IPaymentsState) => {
    switch (action.type) {
      case EPaymentActions.GET:
        if (!draft.byProjectId[action.projectId]) {
          draft.byProjectId[action.projectId] = {
            isLoading: true,
            data: [],
          };
        }
        draft.byProjectId[action.projectId].error = undefined;
        draft.byProjectId[action.projectId].isLoading = true;
        draft.byProjectId[action.projectId].data = [];
        break;
      case EPaymentActions.GET_ERROR:
        draft.byProjectId[action.projectId].error = action.error;
        draft.byProjectId[action.projectId].isLoading = false;
        draft.byProjectId[action.projectId].data = [];
        break;
      case EPaymentActions.GET_SUCCESS:
        draft.byProjectId[action.projectId].isLoading = false;
        draft.byProjectId[action.projectId].data = action.data;
        break;
    }
  })(state);
