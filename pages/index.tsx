import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-ink-950 text-ink-200">
      <Head>
        <title>Fas&apos; Platform Engineer</title>
      </Head>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="border-t border-ink-800">
        <About />
      </section>
      <section id="expirence" className="border-t border-ink-800">
        <WorkExperience />
      </section>
      <section id="skills" className="border-t border-ink-800">
        <Skills />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="contact" className="border-t border-ink-800">
        <Contact />
      </section>
    </div>
  );
}
