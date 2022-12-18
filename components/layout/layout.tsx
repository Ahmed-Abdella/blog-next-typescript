import React from "react";
import { Fragment } from "react";
import NavBar from "./nav-bar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>{children}</main>
    </Fragment>
  );
}
export default Layout;
