import Link from "next/link";
import React from "react";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center py-2">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link
            href="https://devdreaming.com"
            className="underline underline-offset-2"
          >
            Prem Yadav
          </Link>
        </div>
        <Link
          href="mailto:dev.premyadav@gmail.com"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}
