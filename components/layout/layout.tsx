import React from "react";
import { Fragment } from "react";
import Footer from "./footer";
import NavBar from "./nav-bar";

import { Nunito } from "@next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main className={`mt-28 mb-4 mx-40 ${nunito.className}`}>{children}</main>
      <Footer></Footer>
    </Fragment>
  );
}
export default Layout;
