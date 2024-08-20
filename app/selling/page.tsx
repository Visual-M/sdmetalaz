import HeaderTextAndPicture from "@/app/components/headerTextAndPicture";
import { sellingMetalPage } from "@/constants/data";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function SellingPage() {
  return (
    <div className="w-full mx-auto py-8 m-8 flex items-center flex-col">
      <HeaderTextAndPicture
        title={sellingMetalPage.title}
        description={sellingMetalPage.description}
        image={sellingMetalPage.image}
      />

      <div className="container p-0 py-8 md:p-8 mt-8">
        <div className="flex flex-col gap-12 justify-between">
          <h3 className="font-semibold text-3xl text-center">
            {sellingMetalPage.workers}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 px-2">
            {sellingMetalPage.coWorkers.map((coWorker) => (
              <div
                key={coWorker.id}
                className="flex flex-col items-center gap-1 md:gap-2"
              >
                <Image
                  src={coWorker.image}
                  alt={coWorker.name}
                  width={200}
                  height={250}
                />
                <span className="text-l md:text-2xl font-semibold">
                  {coWorker.name}
                </span>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={`tel:${coWorker.phone}`}
                    className="text-l md:text-xl flex gap-1 md:gap-2 items-center"
                  >
                    {coWorker.phone}
                  </a>
                  <a href={`https://wa.me/${coWorker.phone}`} target="_blank">
                    <FaWhatsapp className="text-green-500 text-[20px] md:text-[28px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
