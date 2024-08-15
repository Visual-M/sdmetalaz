import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { navigation, contactInfo } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="w-full mx-auto py-4 flex justify-center bg-black">
      <div className="container py-8">
        <div className=" flex flex-col justify-between md:flex-row  px-4 md:px-0 text-white ">
          <div className="flex flex-col mb-4 md:mb-0">
            <Link href="/">
              <Image
                src="/images/logoWhite.svg"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="mt-2">{contactInfo.paragraph}</p>
          </div>

          <div className="flex flex-col mb-4 md:mb-0">
            <h3 className="uppercase px-2">{navigation.company.title}</h3>
            <ul className="mt-2">
              {navigation.company.categories.map((category) => (
                <li
                  key={category.title}
                  className="py-1 px-2 hover:bg-white hover:text-black"
                >
                  <Link href={category.url}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <div>
              <h3 className="uppercase px-2">{contactInfo.title}</h3>
              <ul className="mt-2 px-2">
                <li className="py-1">
                  {contactInfo.location}: {contactInfo.address}
                </li>
                <li className="py-1">
                  {contactInfo.telephone}: {contactInfo.phone}
                </li>
                <li className="py-1">
                  {contactInfo.mail}: {contactInfo.email}
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-row gap-4 p-2">
                <li>
                  <Link
                    href={contactInfo.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={contactInfo.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={contactInfo.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-white mt-8 flex flex-col md:flex-row md:gap-2">
          <div>&copy; {new Date().getFullYear()} SDMetal.</div>
          <div>{contactInfo.rights}</div>
        </div>
      </div>
    </footer>
  );
}
