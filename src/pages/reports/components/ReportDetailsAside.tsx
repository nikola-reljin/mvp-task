import React, { useContext, useMemo } from "react";
import "./ReportDetailsAside.scss";
import { formatter } from "../../../util";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";
import { appSelectors } from "../../../store/selectors";
import { FilterContext } from "../../../context";
import {
  IGatewaysState,
  IPaymentsState,
  IProjectsState,
} from "../../../store/state";

export const ReportDetailsAside = () => {
  const { active } = useContext(FilterContext);
  const { projectId: filterValueProjectId, gatewayId: filterValueGatewayId } =
    active;

  const projectsState = useSelector(appSelectors.project.state);
  const gatewaysState = useSelector(appSelectors.gateways.state);
  const payments = useSelector(appSelectors.payments.state);

  const chartItems = useChartItems({
    gatewaysState,
    projectsState,
    filterValueProjectId,
    filterValueGatewayId,
    payments,
  });

  /**
   * Calculate the total amount of transactions within payments/gateways.
   */
  const totalAmount = formatter.format(
    Math.round(chartItems.reduce((partialSum, p) => partialSum + p.value, 0))
  );

  return (
    <aside className="report-aside">
      <div className="report-card  d-flex">
        {chartItems.map((item, index) => (
          <div key={index} className="d-flex align-items-center me-3">
            <div
              className="circle me-3"
              style={{ background: colors[index % colors.length] }}
            />
            <div className="label">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="chart-wrapper p-5">
        <PieChart
          data={chartItems}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          labelPosition={100 - 50 / 2}
          labelStyle={{
            fill: "#fff",
            opacity: 0.75,
            pointerEvents: "none",
          }}
          lineWidth={50}
        />
      </div>
      <div className="report-card">
        <p className="fw-bolnd h4">
          {filterValueGatewayId ? "Gateway total" : "Project total"} |
          {totalAmount}
        </p>
      </div>
    </aside>
  );
};

const useChartItems = ({
  filterValueGatewayId,
  filterValueProjectId,
  gatewaysState,
  projectsState,
  payments,
}: {
  filterValueGatewayId?: string;
  filterValueProjectId?: string;
  gatewaysState: IGatewaysState;
  projectsState: IProjectsState;
  payments: IPaymentsState;
}) => {
  /**
   * We figure out chartItems here. These are used to render the chart properly, to render the chart legend and total amount.
   * If we have gatewayId filter value selected we want to show projects chart.
   * If we have a projectId filter value selected we want to show gateways chart.
   */
  const chartItems = useMemo(() => {
    if (filterValueGatewayId) {
      return Object.keys(payments.byProjectId).map((projectId, index) => {
        return {
          title: projectsState.byId[projectId].name,
          value: payments.byProjectId[projectId].data.reduce(
            (prev, next) =>
              next.gatewayId === filterValueGatewayId
                ? prev + next.amount
                : prev,
            0
          ),
          color: colors[index % colors.length],
        };
      });
    }

    if (filterValueProjectId) {
      const sumPerGatewayId: any = {};
      payments.byProjectId[filterValueProjectId].data.forEach(
        (payment, index) => {
          if (sumPerGatewayId[payment.gatewayId]) {
            sumPerGatewayId[payment.gatewayId] += payment.amount;
          } else {
            sumPerGatewayId[payment.gatewayId] = payment.amount;
          }
        }
      );
      return Object.keys(sumPerGatewayId).map((gatewayId, index) => {
        return {
          title: gatewaysState.byId[gatewayId].name,
          value: sumPerGatewayId[gatewayId],
          color: colors[index % colors.length],
        };
      });
    }
    return [];
  }, [
    filterValueGatewayId,
    filterValueProjectId,
    gatewaysState.byId,
    payments.byProjectId,
    projectsState.byId,
  ]);

  return chartItems;
};

interface IReportItem {
  title: string;
  value: number;
}

const colors = ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"];
