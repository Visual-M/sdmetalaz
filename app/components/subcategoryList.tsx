import Link from "next/link";
import Image from "next/image";

interface Subcategory {
  id: number;
  url: string;
  image: string;
  title: string;
}

interface SubcategoryListProps {
  subcategories: Subcategory[];
}

const SubcategoryList: React.FC<SubcategoryListProps> = ({ subcategories }) => {
  return (
    <div className="flex flex-col md:flex-row">
      {subcategories.map((subcategory) => (
        <div key={subcategory.id} className="">
          <Link
            href={subcategory.url}
            className="flex flex-col items-center justify-center text-xl p-4 rounded-lg"
          >
            <Image
              src={subcategory.image}
              alt={subcategory.title}
              width={100}
              height={100}
              className="object-contain"
            />
            {subcategory.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubcategoryList;
