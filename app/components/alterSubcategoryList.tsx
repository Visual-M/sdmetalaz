import Link from "next/link";
import Image from "next/image";

interface AlterSubcategory {
  id: number | string;
  url: string;
  image: string;
  title: string;
}

interface AlterSubcategoryListProps {
  alterSubcategories: AlterSubcategory[];
}

const AlterSubcategoryList: React.FC<AlterSubcategoryListProps> = ({
  alterSubcategories,
}) => {
  return (
    <ul className="grid gap-6 grid-cols-2 md:grid-cols-5">
      {alterSubcategories.map((alterSubcategory) => (
        <li
          key={alterSubcategory.id}
          className="transition-transform transform hover:scale-105 hover:shadow-lg text-center"
        >
          <Link
            href={alterSubcategory.url}
            className="flex flex-col items-center justify-center text-xl p-4 rounded-lg"
          >
            <Image
              src={alterSubcategory.image}
              alt={alterSubcategory.title}
              width={100}
              height={100}
              className="transition-transform transform hover:scale-110"
            />
            {alterSubcategory.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AlterSubcategoryList;
