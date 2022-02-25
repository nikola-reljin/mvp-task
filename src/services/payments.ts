import axios from "axios";
import { BASE_API_URL } from "./url";

interface IReportParams {
  projectId?: string;
  gatewayId?: string;
  from?: string;
  to?: string;
}

const getAll = (data: IReportParams) => {
  const params: IReportParams = {};
  Object.keys(data).forEach((k) => {
    if (data[k as keyof IReportParams]) {
      params[k as keyof IReportParams] = data[k as keyof IReportParams];
    }
  });
  return axios.post(`${BASE_API_URL}/report`, params);
};

const paymentsApi = {
  getAll,
};

export default paymentsApi;
