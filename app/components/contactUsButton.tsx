import Link from "next/link";
import { homePage } from "@/constants/data";

export default function ContactUsButton() {
  return (
    <Link
      href="/contact"
      className="p-4 bg-black text-white rounded font-semibold text-lg md:text-xl"
    >
      {homePage.button}
    </Link>
  );
}
