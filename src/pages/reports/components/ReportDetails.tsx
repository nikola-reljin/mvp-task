import "./ReportDetails.scss";
import React, { useContext, useMemo } from "react";
import { FilterContext } from "../../../context";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../store/selectors";
import { Report_3 } from "./report-item/variations/Report_3";
import { Report_2 } from "./report-item/variations/Report_2";
import { Report_1 } from "./report-item/variations/Report_1";

export const ReportDetails = () => {
  const { active } = useContext(FilterContext);
  const { projectId: filterValueProjectId, gatewayId: filterValueGatewayId } =
    active;

  const project = useSelector(appSelectors.project.byId(filterValueProjectId));
  const gateway = useSelector(appSelectors.gateways.byId(filterValueGatewayId));
  const payments = useSelector(appSelectors.payments.state);

  const titleProjectLabel = filterValueProjectId
    ? project?.name
    : "All Projects";

  const gatewayProjectLabel = filterValueGatewayId
    ? gateway?.name
    : "All Gateways";

  const noResult = Object.keys(payments.byProjectId).reduce(
    (noResult, id) => noResult || payments.byProjectId[id]?.data?.length === 0,
    false
  );
  return (
    <div className="report-container">
      <p className="text-start fw-bold">
        {titleProjectLabel} | {gatewayProjectLabel}
      </p>
      {/*If no projectId or gatewayId filter is set we can render all reports of projects.*/}
      <Report_1 />
      {/*If both projectId and gatewayId filter are set we can render the selected project details.*/}
      <Report_2 />
      {/*If projectId is set but gatewayId filter is not set we can render a report on project by gateway grouping.*/}
      <Report_3 />
    </div>
  );
};
