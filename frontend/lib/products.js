import { fetchJson } from './api';

const CMS_URL = process.env.CMS_URL;

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(p => stripProduct(p));
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

export async function getProductIds() {
  const products = await getProducts();
  return products.map(p => String(p.id));
}

function stripProduct(product) {
  const { id, title, description, price, Picture } = product;
  return {
    id: id,
    title: title,
    description: description,
    price: price,
    image: {
      url: Picture.url,
      width: Picture.width,
      height: Picture.height,
      alt: Picture.alternativeText || Picture.name,
      formats: Picture.formats,
    },
  };
}
