import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full mx-auto py-4 flex justify-center">
      <div className="container flex flex-row justify-between px-4">
        <Link href="/" className="logo">
          <Image src="/images/logo.svg" alt="Logo" width={150} height={150} />
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
