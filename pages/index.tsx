import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div
      className="sm:snap-y h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-black scroll-m-0"
    >
      <Head>
        <title>Fas' DevOps Engineer</title>
      </Head>
      <Header />
      <section id="hero" className="sm:snap-start">
        <Hero />
      </section>
      <section id="about" className="sm:snap-center">
        <About />
      </section>
      <section id="expirence" className="sm:snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="sm:snap-center">
        <Skills />
      </section>
      {/* <section id="projects" className="snap-start">
        <Projects />
      </section> */}
      <section id="contact" className="sm:snap-start">
        <Contact />
      </section>
    </div>
  );
}
