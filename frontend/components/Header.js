import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/api';

export default function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson('/api/user');
        setUser(user);
      } catch (e) {
        setUser(null); // not signed in
      }
    })();
  }, []);

  const handleLogout = async () => {
    console.log('logout');
    await fetchJson('/api/logout');
    setUser(null);
  };

  const renderAuth = () => {
    switch (user) {
      case '':
        return null;
      case null:
        return (
          <Link href="/sign-in">
            <a className="hover:underline">Sign in</a>
          </Link>
        );
      default:
        return user ? (
          <button onClick={handleLogout}>Logout {user.name}</button>
        ) : null;
    }
  };

  return (
    <header className="p-4 border">
      <nav className="flex justify-between">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        {renderAuth()}
      </nav>
    </header>
  );
}
