import HeaderTextAndPicture from "@/app/components/headerTextAndPicture";
import { contactInfo } from "@/constants/data";
import { FaWhatsapp } from "react-icons/fa";
import OurLocation from "../components/ourLocation";

export default function About() {
  return (
    //heading and picture
    <div className="w-full mx-auto py-8 mb-8 flex items-center flex-col">
      <HeaderTextAndPicture
        title={contactInfo.title}
        description={contactInfo.description}
        image={contactInfo.image}
      />

      {/* //contact info */}
      <div className="w-full flex justify-center items-center py-8 my-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between text-left px-4 md:px-8">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.location}:
                </h2>
                <p className="text-xl">{contactInfo.address}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.telephone}
                </h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={`tel:${contactInfo.phone}`}
                    className="text-xl flex gap-2 items-center"
                  >
                    {contactInfo.phone}
                  </a>
                  <a
                    target="_blank"
                    href={`https://wa.me/${contactInfo.phone}`}
                  >
                    <FaWhatsapp className="text-green-500 text-[20px] md:text-[28px]" />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{contactInfo.mail}:</h2>
                <a href={`mailto:${contactInfo.email}`} className="text-xl">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.sellingMetal}:
                </h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={`tel:${contactInfo.sellingMetalPhone}`}
                    className="text-xl flex gap-2 items-center"
                  >
                    {contactInfo.sellingMetalPhone}
                  </a>
                  <a
                    target="_blank"
                    href={`https://wa.me/${contactInfo.sellingMetalPhone}`}
                  >
                    <FaWhatsapp className="text-green-500 text-[20px] md:text-[28px]" />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.alcipanSellings}:
                </h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={`tel:${contactInfo.alcipanSellingsPhone}`}
                    className="text-xl flex gap-2 items-center"
                  >
                    {contactInfo.alcipanSellingsPhone}
                  </a>
                  <a
                    target="_blank"
                    href={`https://wa.me/${contactInfo.alcipanSellingsPhone}`}
                  >
                    <FaWhatsapp className="text-green-500 text-[20px] md:text-[28px]" />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.corpSellings}:
                </h2>
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    href={`tel:${contactInfo.corpSellingsPhone}`}
                    className="text-xl flex gap-2 items-center"
                  >
                    {contactInfo.corpSellingsPhone}
                  </a>
                  <a
                    target="_blank"
                    href={`https://wa.me/${contactInfo.sellingMetalPhone}`}
                  >
                    <FaWhatsapp className="text-green-500 text-[20px] md:text-[28px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //map */}
      <div className="container px-4 md:px-8">
        <OurLocation width="100%" height="400px" />
      </div>
    </div>
  );
}
