import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 border">
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
}
