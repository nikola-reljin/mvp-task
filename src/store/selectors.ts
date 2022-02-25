import { IAppState } from "./state";

const projectsStateSelector = (state: IAppState) => state.projects;
const selectProjectById = (id?: string) => (state: IAppState) => {
  if (id) {
    return state.projects.byId[id];
  }
};
const selectAllProjects = (state: IAppState) => {
  return (state.projects.allIds || []).map((id) => state.projects.byId[id]);
};

const gatewaysStateSelector = (state: IAppState) => state.gateways;
const selectGatewayById = (id?: string) => (state: IAppState) => {
  if (id) {
    return state.gateways.byId[id];
  }
};
const selectAllGateways = (state: IAppState) => {
  return (state.gateways.allIds || []).map((id) => state.gateways.byId[id]);
};

const paymentsStateSelector = (state: IAppState) => state.payments;
const selectPaymentsByProjectId = (projectId: string) => (state: IAppState) =>
  state.payments.byProjectId[projectId];

export const appSelectors = {
  project: {
    state: projectsStateSelector,
    byId: selectProjectById,
    all: selectAllProjects,
  },
  gateways: {
    state: gatewaysStateSelector,
    byId: selectGatewayById,
    all: selectAllGateways,
  },
  payments: {
    state: paymentsStateSelector,
    byProjectId: selectPaymentsByProjectId,
  },
};
