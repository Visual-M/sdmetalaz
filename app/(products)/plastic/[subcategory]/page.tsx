"use client";
import { useParams } from "next/navigation";
import { plasticProducts, similarParagraphs } from "@/constants/data"; // Import the steelProducts array
import SubcategoryList from "@/app/components/subcategoryList";
import AlterSubcategoryList from "@/app/components/alterSubcategoryList";
import HeaderTextAndPicture from "@/app/components/headerTextAndPicture";

export default function SubcategoryPage() {
  const { subcategory } = useParams();

  const subcategoryStr = Array.isArray(subcategory)
    ? subcategory[0]
    : subcategory;

  const product = plasticProducts.find((product) =>
    product.url.endsWith(subcategoryStr)
  );

  if (!product) {
    return <div>Subcategory not found</div>;
  }
  const clickedSubcategory = product.alterSubcategories.find((sub) =>
    sub.url.includes(subcategoryStr)
  );
  const otherSubcategories = plasticProducts.filter(
    (sub) => sub.id !== product.id
  );

  return (
    <div className="w-full mx-auto py-8 flex items-center flex-col">
      {/* Subcategory header picture */}
      <HeaderTextAndPicture
        title={product.title}
        description={product.description}
        image={product.image}
      />

      {/* alter subcategories */}
      <div className="container py-8 mt-8">
        <AlterSubcategoryList alterSubcategories={product.alterSubcategories} />
      </div>

      {/* similar products */}
      <div className="w-full mx-auto py-8 flex items-center flex-col">
        <div className="w-full mx-auto flex justify-center bg-gray-50">
          <div className="container flex flex-col items-center justify-around py-8 px-4 md:px-0">
            <h3 className="text-3xl text-center font-semibold">
              {similarParagraphs.otherProducts}
            </h3>
            <SubcategoryList subcategories={otherSubcategories} />
          </div>
        </div>
      </div>
    </div>
  );
}
