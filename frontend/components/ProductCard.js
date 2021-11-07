import Link from 'next/link';
import Image from 'next/image';
const { CMS_URL } = process.env;

export default function ProductCard({
  product: { id, title, description, price, image },
}) {
  const imageUrl = image.formats?.small?.url || image.url;
  const imageBlurUrl = image.formats?.small?.url || image.url;

  return (
    <div className="relative border shadow-sm hover:shadow-md h-full">
      <Link href={`/products/${id}`}>
        <a>
          <Image
            src={`http://localhost:1337${imageUrl}`}
            alt="img"
            width={320}
            height={240}
            placeholder="blur"
            blurDataURL={`http://localhost:1337${imageBlurUrl}`}
          />
          <div className="flex justify-between items-baseline px-2 pt-6 pb-2">
            <h2 className="text-lg font-bold">{title}</h2>
            <span>{price} €</span>
          </div>
          {/* <p className="p-2 pt-0">{description}</p> */}
        </a>
      </Link>
    </div>
  );
}
