import { useCallback, useContext, useMemo } from "react";
import FilterContext from "../../../../../context/FilterContext";
import { useDispatch, useSelector } from "react-redux";
import { appSelectors } from "../../../../../store/selectors";
import { Button } from "react-bootstrap";
import { FilterMenuItem } from "./filter";
import { FilterButton } from "./FilterButton";
import { FilterButtonDatePicker } from "./FilterButtonDatePicker";
import { actions } from "../../../../../store/actions";

export const FilterBar = () => {
  const { active, next } = useContext(FilterContext);

  const projects = useSelector(appSelectors.project.all);
  const gateways = useSelector(appSelectors.gateways.all);
  const project = useSelector(appSelectors.project.byId(next.projectId));
  const gateway = useSelector(appSelectors.gateways.byId(next.gatewayId));

  const projectFilterlabel = project?.name ?? "All Projects";
  const projectItems = useMemo(() => {
    const out: FilterMenuItem[] = [
      {
        value: undefined,
        label: "All Projects",
      },
    ];
    projects.forEach((p) => {
      out.push({
        value: p.projectId,
        label: p.name,
      });
    });
    return out;
  }, [projects]);

  const gatewayFilterlabel = gateway?.name ?? "All Gateways";
  const gatewayItems = useMemo(() => {
    const out: FilterMenuItem[] = [
      {
        value: undefined,
        label: "All Gateways",
      },
    ];
    gateways.forEach((g) => {
      out.push({
        value: g.gatewayId,
        label: g.name,
      });
    });
    return out;
  }, [gateways]);

  const fromFilterLabel = next.from
    ? `From ${new Date(next.from).toLocaleDateString()}`
    : "From date";
  const toFilterLabel = next.to
    ? `To ${new Date(next.to).toLocaleDateString()}`
    : "To date";

  const dispatch = useDispatch();
  const generateReport = useCallback(() => {
    active.setProjectId(next.projectId);
    active.setGatewayId(next.gatewayId);
    active.setFrom(next.from);
    active.setTo(next.to);
    const params = {
      projectId: next.projectId,
      gatewayId: next.gatewayId,
      to: next.to,
      from: next.from,
    };
    if (next.projectId) {
      dispatch(actions.payments.get(params));
    } else {
      projects.forEach((p) => {
        dispatch(actions.payments.get({ ...params, projectId: p.projectId }));
      });
    }
  }, [
    active,
    dispatch,
    next.from,
    next.gatewayId,
    next.projectId,
    next.to,
    projects,
  ]);

  return (
    <div className="filterbar">
      <FilterButton
        key={1}
        className="me-3 btn-filter"
        label={projectFilterlabel}
        items={projectItems}
        updateValue={next.setProjectId}
      />
      <FilterButton
        key={2}
        className="me-3 btn-filter"
        label={gatewayFilterlabel}
        items={gatewayItems}
        updateValue={next.setGatewayId}
      />
      <FilterButtonDatePicker
        key={3}
        className="me-3 btn-filter"
        label={fromFilterLabel}
        value={next.from}
        updateValue={(d) => next.setFrom(d?.toISOString())}
      />

      <FilterButtonDatePicker
        key={4}
        className="me-3 btn-filter"
        label={toFilterLabel}
        value={next.to}
        updateValue={(d) => next.setTo(d?.toISOString())}
      />
      <Button type="button" variant="primary" onClick={generateReport}>
        Generate Report
      </Button>
    </div>
  );
};
