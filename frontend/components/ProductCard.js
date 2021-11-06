import Link from 'next/link';
import Image from 'next/image';
const { CMS_URL } = process.env;

export default function ProductCard({
  product: { id, title, description, price, image },
}) {
  const imageUrl = image.formats?.small?.url || image.url;
  const imageBlurUrl = image.formats?.thumbnail?.url || image.url;

  return (
    <div className="relative border w-80 shadow-sm hover:shadow-md h-full">
      {/* <div className="absolute left-0 top-0 right-0 bottom-0 z-50 opacity-0 hover:opacity-5 bg-black"></div> */}
      <Link href={`/products/${id}`}>
        <a>
          <div className="h-60 relative">
            <Image
              src={`http://localhost:1337${imageUrl}`}
              alt="img"
              layout="fill"
              placeholder="blur"
              blurDataURL={`http://localhost:1337${imageBlurUrl}`}
            />
          </div>
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
