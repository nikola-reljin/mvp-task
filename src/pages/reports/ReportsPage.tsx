import Page from "../../components/page/Page";
import { ReportsHeader } from "./components/header/ReportsHeader";
import { useEffect, useState } from "react";
import { ReportDetails } from "./components/ReportDetails";
import { ReportDetailsAside } from "./components/ReportDetailsAside";
import FilterContext from "../../context/FilterContext";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import classNames from "classnames";
import { shouldRenderReportPageAside } from "./components/util";

const ReportsPage = () => {
  const active = useFilters();
  const next = useFilters();
  const dispatch = useDispatch();

  /**
   * Load all projects and gateways on the page visit
   */
  useEffect(() => {
    dispatch(actions.projects.getAll());
    dispatch(actions.gateways.getAll());
  }, []);

  /**
   * Create State for FiltersContext
   */
  const filterState = {
    active,
    next,
  };

  const shouldRenderAside = shouldRenderReportPageAside({
    projectId: active.projectId,
    gatewayId: active.gatewayId,
  });

  /**
   * Build class name for the main details view of a report
   */
  const detailsClassName = classNames(
    shouldRenderAside ? "col-md-8" : "col-md-12"
  );

  return (
    <Page htmlTitle="Reports">
      <FilterContext.Provider value={filterState}>
        <ReportsHeader />
        <div className="row">
          <div className={detailsClassName}>
            <ReportDetails />
          </div>
          {shouldRenderAside && (
            <div className="col-md-4">
              <ReportDetailsAside />
            </div>
          )}
        </div>
      </FilterContext.Provider>
    </Page>
  );
};

export default ReportsPage;

const useFilters = () => {
  const [projectId, setProjectId] = useState<string>();
  const [gatewayId, setGatewayId] = useState<string>();
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  return {
    projectId,
    setProjectId,
    gatewayId,
    setGatewayId,
    from,
    setFrom,
    to,
    setTo,
  };
};
