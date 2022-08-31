import React from "react"
import About from "../components/About";

import Experience from "../components/experience";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </Layout>
  )

}
