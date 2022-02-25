import "../../ReportDetails.scss";
import React, { useContext } from "react";
import { FilterContext } from "../../../../../context";
import { IPayment } from "../../../../../models/IPayment";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../../../store/selectors";
import { ReportListItem } from "../ReportListItem";
import { formatter } from "../../../../../util";

export const Report_1 = () => {
  const { active } = useContext(FilterContext);
  const { projectId: filterValueProjectId, gatewayId: filterValueGatewayId } =
    active;

  const projects = useSelector(appSelectors.project.all);
  const payments = useSelector(appSelectors.payments.state);

  const filterPayments = (payments: IPayment[]) => {
    if (filterValueGatewayId) {
      return payments.filter((p) => p.gatewayId === filterValueGatewayId);
    }

    return payments;
  };

  const total = formatter.format(
    Math.round(
      projects
        .map((p) => payments.byProjectId[p.projectId]?.data || [])
        .reduce((a, b) => {
          return [...a, ...b];
        }, [])
        .reduce((partialSum, p) => partialSum + p.amount, 0)
    )
  );

  if (!filterValueProjectId) {
    return (
      <>
        {projects.map((p) => (
          <ReportListItem
            key={p.projectId}
            title={p.name}
            payments={filterPayments(
              payments.byProjectId[p.projectId]?.data || []
            )}
            error={payments.byProjectId[p.projectId]?.error}
            isLoading={payments.byProjectId[p.projectId]?.isLoading}
          />
        ))}
        {!filterValueGatewayId && (
          <div className="report-card mt-5">
            <p className="fw-bold h4 me-3">
              Total: <span>{total}</span>
            </p>
          </div>
        )}
      </>
    );
  }
  return null;
};
