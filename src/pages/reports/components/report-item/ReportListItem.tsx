import "../ReportDetails.scss";
import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../../context";
import { IPayment } from "../../../../models/IPayment";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../../store/selectors";
import { formatter } from "../../../../util";
import { Spinner } from "react-bootstrap";
import { ReportItemTransactionList } from "./component/ReportItemTransactionList";
import classNames from "classnames";

interface IReportListItemProps {
  title?: string;
  error?: string;
  isLoading?: boolean;
  payments: IPayment[];
}

export const ReportListItem = ({
  title = "",
  payments,
  isLoading,
  error,
}: IReportListItemProps) => {
  const { active } = useContext(FilterContext);
  const { gatewayId: filterValueGatewayId, projectId: filterValueProjectId } =
    active;

  useEffect(() => {
    if (filterValueProjectId && filterValueGatewayId) {
      setShowPayments(true);
    }
  }, [filterValueProjectId, filterValueGatewayId]);
  const gatewaysState = useSelector(appSelectors.gateways.state);
  const [showPayments, setShowPayments] = useState(false);

  const total = formatter.format(
    Math.round(payments.reduce((partialSum, p) => partialSum + p.amount, 0))
  );

  if (error) {
    return <div>Oops Error</div>;
  }

  const headerClassName = classNames(
    "header d-flex align-items-center bg-white p-3",
    {
      "d-none": filterValueProjectId && filterValueGatewayId,
    }
  );

  return (
    <div className="report-list-item mb-2">
      <div
        className={headerClassName}
        onClick={() => setShowPayments(!showPayments)}
      >
        <span className="me-auto fw-bold ">{title}</span>
        <span className="ms-auto fw-bold">
          TOTAL:
          {!isLoading && <span>{total}</span>}
          {!!isLoading && <Spinner animation="border" variant="secondary" />}
        </span>
      </div>
      {showPayments && (
        <ReportItemTransactionList
          payments={payments}
          filterValueGatewayId={filterValueGatewayId}
          gatewaysState={gatewaysState}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
