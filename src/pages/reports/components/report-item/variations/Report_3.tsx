import "../../ReportDetails.scss";
import React, { useContext } from "react";
import { FilterContext } from "../../../../../context";
import { IPayment } from "../../../../../models/IPayment";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../../../store/selectors";
import { ReportListItem } from "../ReportListItem";

export const Report_3 = () => {
  const { active } = useContext(FilterContext);
  const { projectId: filterValueProjectId, gatewayId: filterValueGatewayId } =
    active;

  const payments = useSelector(appSelectors.payments.state);
  const gatewayState = useSelector(appSelectors.gateways.state);

  const filterPayments = (payments: IPayment[], gatewayId: string) => {
    if (gatewayId) {
      return payments.filter((p) => p.gatewayId === gatewayId);
    }

    return payments;
  };
  const paymentsPerGatewayId: { [gatewayId: string]: IPayment[] } = {};
  payments.byProjectId[filterValueProjectId as string]?.data.forEach(
    (payment) => {
      if (paymentsPerGatewayId[payment.gatewayId]) {
        paymentsPerGatewayId[payment.gatewayId].push(payment);
      } else {
        paymentsPerGatewayId[payment.gatewayId] = [payment];
      }
    }
  );

  if (filterValueProjectId && !filterValueGatewayId) {
    return (
      <>
        {Object.keys(paymentsPerGatewayId).map((gId) => (
          <ReportListItem
            key={gId}
            title={gatewayState.byId[gId]?.name}
            payments={filterPayments(
              payments.byProjectId[filterValueProjectId]?.data || [],
              gId
            )}
            error={payments.byProjectId[filterValueProjectId]?.error}
            isLoading={payments.byProjectId[filterValueProjectId]?.isLoading}
          />
        ))}
      </>
    );
  }

  return null;
};
