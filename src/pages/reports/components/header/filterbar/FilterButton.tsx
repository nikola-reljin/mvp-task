import { Dropdown, DropdownButton } from "react-bootstrap";
import { FilterMenuItem } from "./filter";

interface IFilterButtonProps {
  className?: string;
  label: string;
  items: FilterMenuItem[];
  updateValue: (value?: string) => void;
}

export const FilterButton = ({
  className,
  label,
  items,
  updateValue,
}: IFilterButtonProps) => {
  return (
    <DropdownButton title={label} className={className}>
      {items.map((item, i) => (
        <Dropdown.Item key={i} onClick={() => updateValue(item.value)}>
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
