import "../styles/globals.css";

import type { AppProps } from "next/app";

import React from "react";
import Router from "next/router";

import Layout from "../components/layout/layout";

// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="text-2xl fixed  top-14 bottom-0 right-0 left-0 blury   flex justify-center items-center   ">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className=" w-10 animate-spin hds-flight-icon--animation-loading"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g fill="#000000" fill-rule="evenodd" clip-rule="evenodd">
                {" "}
                <path
                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                  opacity=".2"
                ></path>{" "}
                <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}
