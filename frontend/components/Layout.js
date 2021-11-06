import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-10 px-4 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
