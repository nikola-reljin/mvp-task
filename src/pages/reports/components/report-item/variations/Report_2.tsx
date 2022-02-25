import "../../ReportDetails.scss";
import React, { useContext } from "react";
import { FilterContext } from "../../../../../context";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../../../store/selectors";
import { ReportListItem } from "../ReportListItem";
import { formatter } from "../../../../../util";

export const Report_2 = () => {
  const { active } = useContext(FilterContext);
  const { projectId: filterValueProjectId, gatewayId: filterValueGatewayId } =
    active;

  const payments = useSelector(appSelectors.payments.state);
  const project = useSelector(appSelectors.project.byId(filterValueProjectId));

  const total = formatter.format(
    Math.round(
      (payments.byProjectId[project?.projectId as any]?.data || []).reduce(
        (partialSum, p) => partialSum + p.amount,
        0
      )
    )
  );

  if (!!filterValueProjectId && !!filterValueGatewayId) {
    return (
      <>
        <ReportListItem
          title={project?.name}
          payments={payments.byProjectId[filterValueProjectId]?.data || []}
          error={payments.byProjectId[filterValueProjectId]?.error}
          isLoading={payments.byProjectId[filterValueProjectId]?.isLoading}
        />
        <div className="report-card mt-5">
          <p className="fw-bold h4">
            {filterValueProjectId ? "Project total" : "Gateway total"} |{total}
          </p>
        </div>
      </>
    );
  }

  return null;
};
