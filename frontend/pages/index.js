import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';
import { getProducts } from '../lib/products';

export default function Home({ products }) {
  return (
    <Layout title="Home">
      <main className="max-w-5xl mx-auto">
        <div className="flex justify-center sm:justify-start">
          <Title className="border">Products</Title>
        </div>
        <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {products.map(product => (
            <li key={product.id} className="">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
