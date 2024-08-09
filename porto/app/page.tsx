"use client"
import Image from "next/image";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import MinatBakat from "./component/MinatBakat";
import Project from "./component/Project";
import Achievements from "./component/Achievements";
import Contact from "./component/Contact";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    AOS.init({})}, [])
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#1c1c1e] via-[#2e2e30] to-[#1c1c1e]">
      <Navigation/>
      <div className="container mt-24 px-12 py-4">
        <Header/>
      </div>
      <section id="about">
        <MinatBakat/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="achievements">
        <Achievements/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <div style={{ height: '200px' }}></div>
    </main>
  );
}
