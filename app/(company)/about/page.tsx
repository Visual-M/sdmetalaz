import HeaderTextAndPicture from "@/app/components/headerTextAndPicture";
import { aboutPage } from "@/constants/data";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full mx-auto m-8 flex items-center flex-col">
      <HeaderTextAndPicture title={aboutPage.title} image={aboutPage.image} />

      <div className="container py-8 px-4 md:p-8 mt-8">
        <div className="flex flex-col gap-12 justify-between">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <p className="text-lg max-w-[45rem]">{aboutPage.firstDescription}</p>
            </div>
            <Image
              src={aboutPage.firstImage}
              alt={aboutPage.title}
              width={700}
              height={1000}
            ></Image>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-around items-start">
            <Image
              src={aboutPage.secondImage}
              alt={aboutPage.title}
              width={700}
              height={1000}
            ></Image>
            <div>
              <p className="text-lg max-w-[45rem]">{aboutPage.secondDescription}</p>
            </div>
          </div>
        </div>
      </div>


      <div>

      </div>
    </div>

  );
}
