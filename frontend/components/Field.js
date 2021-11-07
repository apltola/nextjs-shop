export default function Field({ label, children }) {
  return (
    <label className="block pb-4">
      <span className="block mb-1">{label}</span>
      {children}
    </label>
  );
}
