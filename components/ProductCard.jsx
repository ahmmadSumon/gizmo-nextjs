
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg">
      <Link href={`/products/${product.id}`} passHref>
        <div className="cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
            width={266}
            height={190}
          />
          <h3 className="text-lg font-bold mt-4">{product.name}</h3>
        </div>
      </Link>
      <p className="text-gray-600 mt-2">
        {product.description.substring(0, 25)}...
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
       
      </div>
    </div>
  );
};

export default ProductCard;
