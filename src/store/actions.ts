import { IProject } from "../models/IProject";
import { IGateway } from "../models/IGateway";
import { IPayment } from "../models/IPayment";

export enum EProjectActions {
  GET_ALL = "[Projects] GET_ALL",
  GET_ALL_ERROR = "[Projects] GET_ALL_ERROR",
  GET_ALL_SUCCESS = "[Projects] GET_ALL_SUCCESS",
}

export enum EGatewaysActions {
  GET_ALL = "[Gateways] GET_ALL",
  GET_ALL_ERROR = "[Gateways] GET_ALL_ERROR",
  GET_ALL_SUCCESS = "[Gateways] GET_ALL_SUCCESS",
}

export enum EPaymentActions {
  GET = "[Payments] GET",
  GET_ERROR = "[Payments] GET_ERROR",
  GET_SUCCESS = "[Payments] GET_SUCCESS",
}

const getAllProjects = () => ({
  type: EProjectActions.GET_ALL,
});

const getAllProjectsSuccess = (projects: IProject[]) => ({
  type: EProjectActions.GET_ALL_SUCCESS,
  data: projects,
});

const getAllProjectsError = (error?: string) => ({
  type: EProjectActions.GET_ALL_ERROR,
  error,
});

const getAllGateways = () => ({
  type: EGatewaysActions.GET_ALL,
});

const getAllGatewaysSuccess = (gateways: IGateway[]) => ({
  type: EGatewaysActions.GET_ALL_SUCCESS,
  data: gateways,
});

const getAllGatewaysError = (error?: string) => ({
  type: EGatewaysActions.GET_ALL_ERROR,
  error,
});

const getPayments = ({
  projectId,
  gatewayId,
  from,
  to,
}: {
  projectId?: string;
  gatewayId?: string;
  from?: string;
  to?: string;
}) => ({
  type: EPaymentActions.GET,
  projectId,
  gatewayId,
  from,
  to,
});

const getPaymentsSuccess = (projectId: string, payments: IPayment[]) => ({
  type: EPaymentActions.GET_SUCCESS,
  projectId,
  data: payments,
});

const getPaymentsError = (error?: string) => ({
  type: EPaymentActions.GET_ERROR,
  error,
});

export const actions = {
  projects: {
    getAll: getAllProjects,
    getAllSuccess: getAllProjectsSuccess,
    getAllError: getAllProjectsError,
  },
  gateways: {
    getAll: getAllGateways,
    getAllSuccess: getAllGatewaysSuccess,
    getAllError: getAllGatewaysError,
  },
  payments: {
    get: getPayments,
    getSuccess: getPaymentsSuccess,
    getError: getPaymentsError,
  },
};
