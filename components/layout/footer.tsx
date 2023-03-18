import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/Bs";

export default function Footer() {
  return (
    <footer className=" mx-20 md:mx-5 mt-20 p-20 md:p-5 text-gray-500 text-sm font-semibold border-t">
      <div className="flex items-center justify-center flex-col">
        <Link href="/">
          <Image
            src={"/logo2.svg"}
            alt="the website logo"
            width={150}
            height={150}
          ></Image>
        </Link>

        <ul className="flex gap-4 mt-4  [&>*]:transition [&>*]:duration-300 hover:[&>*]:text-black">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms&Conditions</Link>
          </li>
        </ul>

        <ul className="flex gap-3 mt-4 text-lg [&>*]:transition [&>*]:duration-300 hover:[&>*]:text-black">
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
        </ul>

        <p className="mt-6 text-xs font-light">
          Copyright &copy; 2023 Wetalkdev
        </p>
      </div>
    </footer>
  );
}
