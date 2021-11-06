import ProductCard from '../components/ProductCard';
import Title from '../components/Title';
import { getProducts } from '../lib/products';

export default function Home({ products }) {
  return (
    <main className="max-w-5xl mx-auto">
      <Title>Products</Title>
      <ul className="flex flex-wrap gap-3">
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
