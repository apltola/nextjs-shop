import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      {title && (
        <Head>
          <title>{title} | Next Plant</title>
        </Head>
      )}
      <div className="min-h-screen">
        <Header />
        <div className="py-10 px-4 max-w-6xl mx-auto">{children}</div>
      </div>
    </>
  );
}
