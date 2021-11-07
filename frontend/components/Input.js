export default function Input({ type, name, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
      className="border px-2 py-1 w-full rounded-sm"
    />
  );
}
