"use client";
import { useParams } from "next/navigation";
import { steelProducts, similarParagraphs } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function AltersubcategoryPage() {
  const { subcategory, altersubcategory } = useParams();
  const subcategoryStr = Array.isArray(subcategory)
    ? subcategory[0]
    : subcategory;
  const altersubcategoryStr = Array.isArray(altersubcategory)
    ? altersubcategory[0]
    : altersubcategory;

  const product = steelProducts.find((product) =>
    product.url.endsWith(subcategoryStr)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const alterSubcategory = product.alterSubcategories.find((alterSubcategory) =>
    alterSubcategory.url.endsWith(altersubcategoryStr)
  );

  if (!alterSubcategory) {
    return <div>Altersubcategory not found</div>;
  }

  const otherAlterSubcategories = product.alterSubcategories.filter(
    (sub) => sub.url !== alterSubcategory.url
  );

  return (
    <div className="w-full mx-auto md:py-8 flex flex-col justify-center items-center">
      <div className="container">
        <div className="justify-center items-center grid md:grid-cols-2 p-8">
          <Image
            src={alterSubcategory.image}
            alt={alterSubcategory.title}
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-3xl font-semibold">
              {alterSubcategory.title}
            </h1>
            <p className="text-l md:text-xl font-normal">
              {alterSubcategory.description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex bg-gray-50 justify-center my-12 py-8">
        <div className="container flex flex-col py-8 px-4 md:px-0 text-start">
          <div className="text-xl md:text-3xl font-semibold text-center flex justify-start md:px-8">
            <h3>{similarParagraphs.otherProductsSameCategory}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6">
            {otherAlterSubcategories.map((alterSubcategory) => (
              <div key={alterSubcategory.id} className="p-4 rounded-lg">
                <Link
                  href={alterSubcategory.url}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <Image
                    src={alterSubcategory.image}
                    alt={alterSubcategory.title}
                    width={100}
                    height={100}
                    className="transition-transform transform hover:scale-110"
                  />
                  <span className="text-m md:text-xl">
                    {alterSubcategory.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
