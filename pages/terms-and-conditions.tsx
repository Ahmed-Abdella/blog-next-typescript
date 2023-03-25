import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function termsAndConditions() {
  return (
    <div>
      <Head>
        <title>We Talk Dev - Terms and Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-72 2xl:px-56 xl:px-40 lg:px-24 md:px-12 sm:px-4  [&_a]:text-cyan-500 hover:[&_a]:underline [&_h2]:text-2xl [&_h2]:font-semibold  [&_h2]:mt-4 ">
        <h1 className="text-center text-3xl font-semibold mb-8">
          Terms and Conditions
        </h1>
        <div>
          <h2>Acceptance of terms:</h2>
          <p>
            By using wetalkdev.com, you agree to these terms and conditions. If
            you do not agree with them, please do not use the site.
          </p>

          <h2>Ownership:</h2>
          <p>
            wetalkdev.com and its content are the property of the site owners
            and/or their partners or affiliates, and are protected by copyright
            and other intellectual property laws. You may not reproduce,
            distribute, or modify any content without permission.
          </p>

          <h2>Use of Content:</h2>
          <p>
            You may use the content on wetalkdev.com for personal,
            non-commercial purposes, such as reading articles or sharing them on
            social media. However, you may not use the content for any
            commercial purpose without permission.
          </p>

          <h2>Disclaimer:</h2>
          <p>
            wetalkdev.com provides information and opinions about web
            development and software engineering, but is not responsible for any
            actions you take based on this information. if you noticed any
            informations that looks wrong please contact us.
          </p>

          <h2>Changes to Terms:</h2>
          <p>
            The site owners may update these terms and conditions at any time.
            Please check this page periodically for changes. Thank you for
            taking the time to review our terms and conditions. If you have any
            questions, please contact us at{" "}
            <a
              href="mailto:ahmedelgendy409@gmail.com?subject=Contact Request - wetalkdev.com"
              target={"_blank"}
            >
              ahmedelgendy409@gmail.com
            </a>
            {"  "}
            or{"  "}
            <a
              href="mailto:abdellaa921@gmail.com?subject=Contact Request - wetalkdev.com"
              target={"_blank"}
            >
              abdellaa921@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default termsAndConditions;
