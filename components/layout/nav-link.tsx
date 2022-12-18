import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
interface navLinkValues {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: navLinkValues) {
  const router = useRouter();

  return (
    <Link
      className={`px-2 py-1 hover:bg-gray-200 transition duration-500 rounded-md ${
        href === router.pathname ? "bg-gray-200" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
