type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      className="w-full p-4 border outline-none border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
      placeholder="Buscar país"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
