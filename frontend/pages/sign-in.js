import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Field from '../components/Field';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { fetchJson } from '../lib/api';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, error: false });

    try {
      await fetchJson('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      // setStatus({ loading: false, error: false });
      router.push('/');
    } catch (e) {
      setStatus({ loading: false, error: 'Authentication failed! 😟' });
    }
  };

  return (
    <Layout title="Sign in">
      <Title>Sign in to your account</Title>
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit" loading={status.loading}>
          Sign in!
        </Button>
        {status.error && (
          <p className="bg-red-500 text-white mt-4 w-80 px-2 py-1 text-center">
            {status.error}
          </p>
        )}
      </form>
    </Layout>
  );
}
