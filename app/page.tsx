import Image from "next/image";
import { homePage } from "../constants/data";
import {
  FaBriefcase,
  FaShoppingCart,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import ContactUsButton from "./components/contactUsButton";
import OurLocation from "./components/ourLocation";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div
        style={{
          backgroundImage: `url(${homePage.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-[100%] h-[50vh]"
      ></div>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <FaBriefcase className="text-[4rem]" />
            </div>
            <div className="w-2/3">
              <h2 className="text-xl md:text-2xl font-semibold pb-4">
                {homePage.workArea}
              </h2>
              <p className="text-base md:text-lg">{homePage.workAreaDesc}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <FaShoppingCart className="text-[4rem]" />
            </div>
            <div className="w-2/3">
              <h2 className="text-xl md:text-2xl font-semibold pb-4">
                {homePage.selling}
              </h2>
              <p className="text-base md:text-lg">{homePage.sellingDesc}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <FaTruck className="text-[4rem]" />
            </div>
            <div className="w-2/3">
              <h2 className="text-xl md:text-2xl font-semibold pb-4">
                {homePage.delivery}
              </h2>
              <p className="text-base md:text-lg">{homePage.deliveryDesc}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3 flex justify-center">
              <FaCheckCircle className="text-[4rem]" />
            </div>
            <div className="w-2/3">
              <h2 className="text-xl md:text-2xl font-semibold pb-4">
                {homePage.quality}
              </h2>
              <p className="text-base md:text-lg">{homePage.qualityDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-gray-100 py-8">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-[4rem]">
            {homePage.productsHeader}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homePage.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mx-auto py-8">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-8 px-4 md:px-0">
            <div className="flex flex-col text-center md:items-start md:text-start gap-4">
              <h2 className="text-2xl md:text-4xl font-bold">{homePage.map}</h2>
              <p className="text:l md:text-xl">{homePage.workingHours}</p>
              <p className="text:l md:text-xl">{homePage.mapDes}</p>
              <ContactUsButton />
            </div>
            <div className="mt-8 md:mt-0">
              <OurLocation width="100%" height="300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
