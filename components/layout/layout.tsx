import React from "react";
import { Fragment } from "react";
import Footer from "./footer";
import NavBar from "./nav-bar";

import { Inter } from "@next/font/google";

const fontFamily = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main
        className={`p-1 mt-24 mb-4 mx-28 2xl:mx-25 xl:mx-20 lg:mx-10  sm:mx-6     ${fontFamily.className}  `}
      >
        {children}
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
export default Layout;
