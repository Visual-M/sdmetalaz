import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div className="relative flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="object-contain mb-4 bg-no-repeat"
      />
      <h2 className="text-xl font-medium text-left text-black rounded-lg p-2">
        {title}
      </h2>
    </div>
  );
};

export default ProductCard;
