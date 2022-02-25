import produce from "immer";
import { EGatewaysActions } from "../actions";
import { IGatewaysState } from "../state";
import { IGateway } from "../../models/IGateway";

const initialState: IGatewaysState = {
  isLoading: false,
  byId: {},
  allIds: [],
};

export const gatewaysReducer = (
  state: IGatewaysState = initialState,
  action: any
) =>
  produce((draft: IGatewaysState) => {
    switch (action.type) {
      case EGatewaysActions.GET_ALL:
        draft.isLoading = true;
        draft.error = undefined;
        break;
      case EGatewaysActions.GET_ALL_ERROR:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case EGatewaysActions.GET_ALL_SUCCESS:
        draft.isLoading = false;
        action.data.forEach((gateway: IGateway) => {
          draft.allIds.push(gateway.gatewayId);
          draft.byId[gateway.gatewayId] = gateway;
        });
        break;
    }
  })(state);
