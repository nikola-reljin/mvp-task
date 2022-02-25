import { IProject } from "../models/IProject";
import { IPayment } from "../models/IPayment";
import { IGateway } from "../models/IGateway";

export interface IAppState {
  projects: IProjectsState;
  gateways: IGatewaysState;
  payments: IPaymentsState;
}
export interface IProjectsState extends IDataState<IProject> {}
export interface IGatewaysState extends IDataState<IGateway> {}

export interface IPaymentsState {
  allIds: string[];
  byProjectId: {
    [projectId: string]: {
      isLoading: boolean;
      error?: string;
      data: IPayment[];
    };
  };
}

export interface IDataState<T> {
  isLoading: boolean;
  error?: string;
  byId: {
    [id: string]: T;
  };
  allIds: string[];
}
