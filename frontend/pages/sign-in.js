import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Button from '../components/Button';
import Field from '../components/Field';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { useSignin } from '../hooks/user';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInError, signInLoading } = useSignin();

  const handleSubmit = async e => {
    e.preventDefault();

    const signinIsValid = await signIn(email, password);
    if (signinIsValid) {
      router.push('/');
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
        <Button type="submit" loading={signInLoading}>
          Sign in!
        </Button>
        {signInError && (
          <p className="bg-red-500 text-white mt-4 w-80 px-2 py-1 text-center">
            Authentication failed! :/
          </p>
        )}
      </form>
    </Layout>
  );
}
