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
      className={`px-2 py-1 hover:text-gray-900 transition duration-300 rounded-md ${
        href === router.pathname ? "text-cyan-500" : ""
      } ${href === router.pathname ? "hover:text-cyan-500" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
