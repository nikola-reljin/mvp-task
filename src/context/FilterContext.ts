import { createContext, useCallback } from "react";

interface IFilterContext {
  active: IFilterState;
  next: IFilterState;
}

interface IFilterState {
  projectId?: string;
  gatewayId?: string;
  from?: string;
  to?: string;
  setProjectId: (projectId?: string) => void;
  setGatewayId: (gatewayId?: string) => void;
  setFrom: (from?: string) => void;
  setTo: (to?: string) => void;
}

const FilterContext = createContext<IFilterContext>({
  active: {
    setProjectId: () => {
      throw new Error("Unimplemented method.");
    },
    setGatewayId: () => {
      throw new Error("Unimplemented method.");
    },
    setFrom: () => {
      throw new Error("Unimplemented method.");
    },
    setTo: () => {
      throw new Error("Unimplemented method.");
    },
  },
  next: {
    setProjectId: () => {
      throw new Error("Unimplemented method.");
    },
    setGatewayId: () => {
      throw new Error("Unimplemented method.");
    },
    setFrom: () => {
      throw new Error("Unimplemented method.");
    },
    setTo: () => {
      throw new Error("Unimplemented method.");
    },
  },
});

export default FilterContext;
