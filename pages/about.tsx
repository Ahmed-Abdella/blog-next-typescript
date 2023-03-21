import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function about() {
  return (
    <div>
      <Head>
        <title>about us</title>
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className="flex flex-col">
        <section
          id="Ahmed-ElGendy"
          className="py-10  flex md:flex-col  items-center justify-center"
        >
          <Image
            alt="creator image"
            src={"/images/creators/gendy.jpg"}
            width={150}
            height={150}
            className="rounded-full mr-10 md:mb-10 md:mr-0 "
          ></Image>

          <div>
            <h1 className="text-4xl font-semibold mb-4">Ahmed ElGendy</h1>
            <p>
              As a backend developer with over 5 years of experience, I have
              honed my skills in creating robust and efficient systems. I am
              passionate about problem-solving and thrive in challenging
              environments. With a keen eye for detail and a dedication to
              continuous learning, I consistently strive to improve my craft. My
              experience has given me a deep understanding of the intricacies of
              development, and I am always eager to take on new challenges.
              Whether it's designing complex architectures or optimizing
              existing systems, I am committed to delivering high-quality
              solutions that meet the needs of my clients. At
              http://wetalkdev.com, I look forward to sharing my knowledge and
              experiences with others in the developer community.
            </p>
            <div className="mt-6 [&_a]:text-3xl [&_a]:text-gray-700 [&_a]:mr-6 flex items-center">
              <Link href="https://www.linkedin.com/in/elgendeee/">
                <FaLinkedin className="fa-brands fa-linkedin hover:text-sky-700 transition duration-100"></FaLinkedin>
              </Link>
              <Link href="https://github.com/elgendeee">
                <FaGithub className="fa-brands fa-github hover:text-black transition duration-100"></FaGithub>
              </Link>
              <Link href="https://twitter.com/elgendy_4595">
                <FaTwitter className="fa-brands fa-twitter hover:text-sky-500 transition duration-100"></FaTwitter>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="Ahmed-Abdella"
          className=" mt-16 py-10 border-t flex md:flex-col  items-center justify-center"
        >
          <Image
            alt="creator image"
            src={"/images/creators/abdella.jpg"}
            width={150}
            height={150}
            className="rounded-full mr-10 md:mb-10 md:mr-0"
          ></Image>
          <div className="">
            <h1 className=" text-4xl font-semibold mb-4">Ahmed Abdella</h1>
            <p>
              As a backend developer with over 5 years of experience, I have
              honed my skills in creating robust and efficient systems. I am
              passionate about problem-solving and thrive in challenging
              environments. With a keen eye for detail and a dedication to
              continuous learning, I consistently strive to improve my craft. My
              experience has given me a deep understanding of the intricacies of
              development, and I am always eager to take on new challenges.
              Whether it's designing complex architectures or optimizing
              existing systems, I am committed to delivering high-quality
              solutions that meet the needs of my clients. At
              http://wetalkdev.com, I look forward to sharing my knowledge and
              experiences with others in the developer community.
            </p>
            <div className="mt-6 [&_a]:text-3xl [&_a]:text-gray-700 [&_a]:mr-6 flex items-center">
              <Link href="https://www.linkedin.com/in/ahmed-abdella/">
                <FaLinkedin className="fa-brands fa-linkedin hover:text-sky-700 transition duration-100"></FaLinkedin>
              </Link>
              <Link href="https://github.com/Ahmed-Abdella">
                <FaGithub className="fa-brands fa-github hover:text-black transition duration-100"></FaGithub>
              </Link>
              <Link href="https://twitter.com/Ahmedabdella987">
                <FaTwitter className="fa-brands fa-twitter hover:text-sky-500 transition duration-100"></FaTwitter>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default about;
