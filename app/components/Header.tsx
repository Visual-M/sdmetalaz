"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [imageWidth, setImageWidth] = useState(260);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth <= 768) {
        setImageWidth(200);
      } else {
        setImageWidth(260);
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Set initial width

    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <header className="w-full mx-auto py-4 flex justify-center">
      <div className="container flex flex-row justify-between items-center px-4">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={imageWidth}
            height={imageWidth}
          />
        </Link>
        <div className="button">
          <Link
            href="/selling"
            className="bg-black text-white px-4 py-2 rounded hidden md:block uppercase"
          >
            Metal Satışı
          </Link>
        </div>
      </div>
    </header>
  );
}
