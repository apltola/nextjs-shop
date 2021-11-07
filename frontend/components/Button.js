export default function Button({ type, loading, children }) {
  return (
    <button
      type={type}
      disabled={loading}
      className="bg-forest-green text-white px-4 py-1 rounded-sm hover:bg-green-pigment disabled:cursor-not-allowed"
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

// style={{ backgroundColor: '#138A36', color: '#fff' }}
