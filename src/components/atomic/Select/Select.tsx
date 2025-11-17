import { selectBase, selectError } from "./Select.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  optionData?: { value: string; label: string }[];
  error?: boolean;
}

const Select = (props: SelectProps) => {
  const { optionData = [], error = false, ...rest } = props;
  return (
    <select className={error ? selectError : selectBase} {...rest}>
      {optionData.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;  