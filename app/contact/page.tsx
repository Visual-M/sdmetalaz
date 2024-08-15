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
          <div className="flex flex-col md:flex-row justify-around text-left px-4 md:px-8">
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
                <p className="text-xl flex gap-2 items-center">
                  {contactInfo.phone} <FaWhatsapp style={{ color: "green" }} />
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{contactInfo.mail}:</h2>
                <p className="text-xl">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.location}:
                </h2>
                <p className="text-xl">{contactInfo.address}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.location}:
                </h2>
                <p className="text-xl">{contactInfo.address}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {contactInfo.location}:
                </h2>
                <p className="text-xl">{contactInfo.address}</p>
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
