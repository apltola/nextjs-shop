import Link from 'next/link';
import { useSignOut, useUser } from '../hooks/user';

export default function Header() {
  const user = useUser();
  const signOut = useSignOut();

  const renderAuth = () => {
    if (typeof user === 'undefined') return null;

    return user ? (
      <button onClick={signOut}>Logout {user.name}</button>
    ) : (
      <Link href="/sign-in">
        <a className="hover:underline">Sign in</a>
      </Link>
    );
  };

  return (
    <header className="p-4 border">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <a className="hover:underline font-black text-xl">Next|Plant</a>
        </Link>
        {renderAuth()}
      </nav>
    </header>
  );
}
