import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative text-center max-w-3xl px-6 sm:px-10 mx-auto items-center py-20 sm:py-28">
      <h3 className="uppercase tracking-[20px] text-accent-400 text-2xl mb-8">
        About
      </h3>
      <h1 className="text-4xl font-semibold text-ink-200">
        Here is a little background
      </h1>
      <p className="text-base sm:text-lg mt-6 text-ink-400">
        Platform engineer with 7+ years in cloud infrastructure and DevOps.
        Over the last year or so my focus has shifted into AI platform
        engineering, building the API/MCP integrations and security controls
        that let the business safely adopt tools like Claude Enterprise.
      </p>
    </div>
  );
}

export default About;