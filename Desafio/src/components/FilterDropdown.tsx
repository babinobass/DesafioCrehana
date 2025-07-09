interface FilterDropdownProps {
  title: string;
  items: string[];
  value: string;
  onChange: (selected: string) => void;
}

const FilterDropdown = ({
  title,
  items,
  value,
  onChange,
}: FilterDropdownProps) => {
  return (
    <select
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300 transition-colors"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={title}
    >
      <option value="">{title}</option>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
