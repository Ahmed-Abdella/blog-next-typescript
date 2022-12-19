import React from "react";
import { Fragment } from "react";
import Footer from "./footer";
import NavBar from "./nav-bar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main className="mt-28 mb-4 mx-40">{children}</main>
      <Footer></Footer>
    </Fragment>
  );
}
export default Layout;
