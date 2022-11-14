import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-black">
      <Head>
        <title>Fas' DevOps Engineer</title>
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id = "expirence">
        <WorkExperience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="projects" className="snap-start">
        <Projects />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
