import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";

interface IFilterButtonDatePickerProps {
  label: string;
  updateValue: (value: Date | null) => void;
  value?: string;
  className?: string;
}

export const FilterButtonDatePicker = ({
  label,
  className,
  value,
  updateValue,
}: IFilterButtonDatePickerProps) => {
  const [isDropdownOpen, setIsCalendarOpen] = useState(false);

  const onApply = () => setIsCalendarOpen(false);
  const onClose = () => {
    updateValue(null);
  };

  return (
    <Dropdown
      show={isDropdownOpen}
      onToggle={setIsCalendarOpen}
      className={className}
    >
      <Dropdown.Toggle
        className="btn-filter"
        id="dropdown-basic"
        onClick={() => setIsCalendarOpen(!isDropdownOpen)}
      >
        {label}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="dropdown-body">
          <DatePicker
            open={true}
            selected={value ? new Date(value) : undefined}
            onChange={updateValue}
          />

          <div className="flex-grow-1 d-flex flex-column justify-content-end">
            <div className="d-flex align-items-center ps-4 pe-4">
              <button
                className="btn btn-secondary me-auto text-light"
                onClick={onApply}
              >
                ok
              </button>
              <button className="btn btn-secondary ms-auto" onClick={onClose}>
                reset
              </button>
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
