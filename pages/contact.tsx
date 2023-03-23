import Head from "next/head";
import Image from "next/image";

function contact() {
  return (
    <div>
      <Head>
        <title>We Talk Dev - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-2 lg:grid-cols-1 [&_span]:block [&_span]:my-2 [&_a]:text-cyan-500 hover:[&_a]:underline">
        <div className="mr-10">
          <h1 className="text-4xl mb-6 font-semibold">Contact</h1>
          <p>
            You can send us feedback, suggestions and questions by emailing us
            at
            <span>
              <a
                href="mailto:ahmedelgendy409@gmail.com?subject=Contact Request - wetalkdev.com"
                target={"_blank"}
              >
                ahmedelgendy409@gmail.com
              </a>
            </span>
            <span>
              <a
                href="mailto:abdellaa921@gmail.com?subject=Contact Request - wetalkdev.com"
                target={"_blank"}
              >
                abdellaa921@gmail.com
              </a>
            </span>
            {/* or Alternatively, you can send us a message on either:
            <a href="https://www.linkedin.com/in/elgendeee/" target={"_blank"}>
              ElGendy LinkedIn
            </a>
            <a href="https://twitter.com/elgendy_4595" target={"_blank"}>
              ElGendy Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-abdella/"
              target={"_blank"}
            >
              Abdella LinkedIn
            </a>
            <a href="https://twitter.com/Ahmedabdella987" target={"_blank"}>
              {" "}
              Abdella Twitter
            </a> */}
            If you spot outdated information in any of our articles, send one of
            us a link and we will make sure to update the article ASAP.
          </p>
        </div>

        <Image
          src={"/images/contact-svg.svg"}
          width={400}
          height={400}
          alt="contact illustrator"
          className="object-left  lg:hidden justify-self-end"
        ></Image>
      </div>
    </div>
  );
}

export default contact;
