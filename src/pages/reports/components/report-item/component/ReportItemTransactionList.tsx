import { IPayment } from "../../../../../models/IPayment";
import classNames from "classnames";
import { IGatewaysState } from "../../../../../store/state";
import { Spinner } from "react-bootstrap";
import React from "react";

interface IReportItemTransactionListProps {
  payments: IPayment[];
  filterValueGatewayId?: string;
  isLoading?: boolean;
  gatewaysState: IGatewaysState;
}

export const ReportItemTransactionList = ({
  payments,
  filterValueGatewayId,
  gatewaysState,
  isLoading,
}: IReportItemTransactionListProps) => {
  const collClassName = classNames(filterValueGatewayId ? "col-md-4" : "col-3");
  return (
    <div className="mt-3">
      <div className="bg-white mb-3">
        <div className="row">
          <div className={`${collClassName} fw-bold text-start`}>Date</div>
          {!filterValueGatewayId && (
            <div className={`${collClassName} fw-bold`}>Gateway</div>
          )}
          <div className={`${collClassName} fw-bold`}>Transaction ID</div>
          <div className={`${collClassName} fw-bold text-end`}>Amount</div>
        </div>
      </div>
      {!!isLoading && <Spinner animation="border" variant="secondary" />}
      {!isLoading &&
        payments.length === 0 &&
        "No Transactions for given criteria."}

      {!isLoading &&
        payments.map((payment, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? "mb-2" : "mb-2 bg-white"}
          >
            <div className="row">
              <div className={`${collClassName} text-start`}>
                {payment.created}
              </div>
              {!filterValueGatewayId && (
                <div className={`${collClassName}`}>
                  {gatewaysState.byId[payment.gatewayId]?.name}
                </div>
              )}
              <div className={`${collClassName}`}>{payment.paymentId}</div>
              <div className={`${collClassName} text-end`}>
                {payment.amount}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
