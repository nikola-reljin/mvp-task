export const useReportPageRenderMode = () => {};

export const shouldRenderReportPageAside = ({
  projectId,
  gatewayId,
}: {
  projectId?: string;
  gatewayId?: string;
}) => {
  if (!!projectId && !!gatewayId) {
    return false;
  }

  if (!projectId && !gatewayId) {
    return false;
  }
  return true;
};

export enum EReportPageRenderMode {
  ALL_PROJECTS_NO_FILTERS,
  PROJECT_WITH_ALL_GATEWAYS,
  PROJECT_WITH_1_GATEWAY,
  GATEWAYS,
}
