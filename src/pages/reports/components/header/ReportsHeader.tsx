import "./ReportsHeader.scss";
import "react-datepicker/dist/react-datepicker.css";
import { FilterBar } from "./filterbar/Filterbar";

export const ReportsHeader = () => {
  return (
    <div className="d-block align-items-center d-md-flex">
      <div className="flex-grow-1">
        <h1 className="h2 fw-bold text-start">Reports</h1>
        <p className="text-secondary  fw-bold text-start opacity-50">
          Easily generate a report of your transactions
        </p>
      </div>
      <FilterBar />
    </div>
  );
};
