import projectsApi from "./projects";
import gatewaysApi from "./gateways";
import paymentsApi from "./payments";

export interface IServerResponse<T> {
  code: string;
  data: T;
  error: null | string;
}

export const apiService = {
  projects: projectsApi,
  gateways: gatewaysApi,
  payments: paymentsApi,
};
