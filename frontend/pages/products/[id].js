import Image from 'next/image';
import Head from 'next/head';
import { ApiError } from '../../lib/api';
import Title from '../../components/Title';
import { getProduct, getProductIds } from '../../lib/products';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';

export default function ProductPage({ product }) {
  const router = useRouter();
  const { image } = product;
  const imageUrl = image.url;
  const imageBlurUrl = image.formats?.thumbnail?.url || image.url;

  return (
    <Layout title={product.title}>
      <div className="mb-4">
        <button
          onClick={() => router.push('/')}
          className="hover:text-blue-600"
        >
          ← Back to products
        </button>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center">
          <div className="border shadow-inner">
            <Image
              src={`http://localhost:1337${imageUrl}`}
              width={640}
              height={480}
              alt="img"
              placeholder="blur"
              blurDataURL={`http://localhost:1337${imageBlurUrl}`}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center pl-4 pt-4 lg:pt-0">
          <div className="max-w-lg">
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <p className="text-2xl pt-4">{product.price} €</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const ids = await getProductIds();
  return {
    paths: ids.map(id => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(ctx) {
  const {
    params: { id },
  } = ctx;

  try {
    const product = await getProduct(id);
    return {
      props: {
        product,
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) {
      return { notFound: true };
    }
    throw e;
  }
}
