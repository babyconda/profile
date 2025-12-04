import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.png";

// Animated numbers component
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });

    return () => unsubscribe && unsubscribe();
  }, [springValue, value]);

  return <span ref={ref} />;
};

// About component (page-style component)
const About = () => {
  return (
    <>
      <Head>
        <title>Prem Yadav | About Page</title>
        <meta name="description" content="Prem Yadav's Portfolio " />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="flex sm:flex-col-reverse items-start justify-between  md:flex-row w-full gap-10">
            {/* Biography Section */}
            <div className="flex-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                👋 Hi, I&apos;m Prem Yadav — a passionate Full-Stack Software
                Developer with a journey shaped by ambition, learning, and
                resilience. I began my career as an ex-business owner, launching
                my own clothing venture right after graduation. Even though it
                eventually closed, it taught me the fundamentals of building
                something from scratch.
              </p>

              <p className="my-4 font-medium">
                Driven by curiosity and a deep love for technology, I
                transitioned into software development by self-learning the MERN
                stack, building multiple real-world projects, and integrating
                AI-powered tools to enhance development speed and creativity.
              </p>

              <p className="my-4 font-medium">
                I enjoy exploring new technologies, solving challenging
                problems, and creating digital experiences that feel meaningful,
                intuitive, and impactful. I also leverage AI automation to
                streamline workflows, boost productivity, and build smarter
                features.
              </p>

              <p className="font-medium">
                With big dreams and a mindset of continuous learning, I aim to
                build products that make a real difference. I look forward to
                crafting innovative, AI-powered solutions that truly matter.
              </p>
            </div>

            {/* Image Section */}
            <div className=" relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={profilePic}
                alt="premyadav"
                className="w-full h-[450px] rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
