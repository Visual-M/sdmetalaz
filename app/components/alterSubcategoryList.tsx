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
    <ul className="grid grid-cols-2 md:grid-cols-5">
      {alterSubcategories.map((alterSubcategory) => (
        <li
          key={alterSubcategory.id}
          className="transition-transform transform hover:scale-105 hover:shadow-lg text-center flex flex-col justify-start items-center p-4 mb-12"
        >
          <Link
            href={alterSubcategory.url}
            className="flex flex-col items-center justify-center rounded-lg"
          >
            <Image
              src={alterSubcategory.image}
              alt={alterSubcategory.title}
              width={150}
              height={100}
              className="object-contain"
            />
            <p className="text-[18px]">{alterSubcategory.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AlterSubcategoryList;
