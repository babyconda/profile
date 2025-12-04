import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import About from "@/components/About";
import Projectss, { Project } from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prem Yadav&apos;s Portfolio</title>
        <meta
          name="description"
          content="Full Stack software engineer portfolio"
        />
      </Head>
      <TransitionEffect />
      <main className=" flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="prem yadav"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi there 👋, I'm Prem Yadav..."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl sm:!text-center"
              />
              <p className="my-4 text-base font-medium sm:text-center md:text-sm sm:text-xs">
                As a skilled full-stack developer, Turning vision into real
                products using full-stack engineering, modern design, AI-driven
                solutions, and seamless automation to deliver next-generation
                user experiences.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4  md:text-base "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:dev.premyadav@gmail.com"
                  target={"_blank"}
                  className="ml-4 py-2 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden ">
          <Image src={lightBulb} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
      <About />
      <Projectss />
      <Footer />
    </>
  );
}
