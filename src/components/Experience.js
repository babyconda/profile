import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  // Split the work string into separate bullet points
  const workItems = work
    .split("•")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full md:text-sm list-disc ml-5 mt-2">
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Intern"
            companyLink="https://victopialabs.com"
            company="Victopia Labs"
            time="April 15, 2024 - June 15, 2024"
            address="Remote"
            work="• Developed 20+ reusable Material UI components, accelerating frontend development by 40%.
• Migrated a large React project to Vite, improving build speed by 30%.
• Integrated REST APIs and contributed to agile sprints to ship production-ready features."
          />

          <Details
            position="Full Stack Software Engineer"
            companyLink="https://victopialabs.com"
            company="Victopia Labs"
            time="June 17, 2024 - August 21, 2025"
            address="Remote"
            work="• Built and optimized REST APIs with Node.js & Express handling 1K+ daily requests, adding caching and improving speed significantly.
            • Designed and deployed a real-time WebSocket system reducing latency by 70%.
            • Led React, Next.js, and MUI frontend development, increasing performance and accessibility.
            • Created reusable components and best practices that cut frontend duplication by 40%.
            • Collaborated with designers and PMs to deliver user-focused features on schedule.
            • Managed a team of 5 engineers, improving sprint velocity and reducing bugs by 25% through reviews & test automation."
          />

          <Details
            position="Full Stack Developer"
            companyLink="https://www.alwrite.com"
            company="Alwrite"
            time="September 23, 2025 - Present"
            address="Lower Parel, Mumbai"
            work="• Developing a Quote Broker platform connecting corporate clients with insurance providers.
            • Building scalable web applications to streamline insurance operations and improve client experience.
            • Creating tools for data analysis, reporting, and visualization to assist decision-making."
          />
        </ul>
      </div>
    </div>
  );
}
