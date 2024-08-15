import HeaderTextAndPicture from "@/app/components/headerTextAndPicture";
import { sellingMetalPage } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function SellingPage() {
  return (
    <div className="w-full mx-auto py-8 m-8 flex items-center flex-col">
      <HeaderTextAndPicture
        title={sellingMetalPage.title}
        description={sellingMetalPage.description}
        image={sellingMetalPage.image}
      />

      <div className="container py-8 md:p-8 mt-8">
        <div className="flex flex-col gap-12 justify-between">
          <h3 className="font-semibold text-3xl text-center">
            {sellingMetalPage.workers}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {sellingMetalPage.coWorkers.map((coWorker) => (
              <div key={coWorker.id} className="flex flex-col items-center gap-2">
                <Image
                  src={coWorker.image}
                  alt={coWorker.name}
                  width={300}
                  height={400}
                />
                <span className="text-2xl font-semibold">{coWorker.name}</span>
                <a href={`tel:${coWorker.phone}`} className="text-xl ">
                  {coWorker.phone}
                </a>
                <a href={`mailto:${coWorker.email}`} className="text-xl ">
                  {coWorker.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
