
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Homescreen';

function App() {
  return (
    <div className="bg-black text-cyan-200 font-futuristic min-h-screen px-6 py-8">
      <header className="text-center">
        <h1 className="text-5xl font-bold neon-glow mb-4">Maya Cleveland</h1>
        <p className="text-xl">Computer Science Student | Cybersecurity & AI Enthusiast</p>
        <nav className="mt-6 space-x-6">
          <a href="#about-me" className="hover:text-pink-400 transition">About</a>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </nav>
      </header>

      <main className="mt-12 space-y-12">
        <section id="about-me">
          <h2 className="text-3xl border-b border-cyan-500 pb-2">About Me</h2>
          <p className="mt-2 text-cyan-100">
            I’m a college student passionate about solving real-world problems with code. I'm into assembly, OCaml, and building cool web apps.
          </p>
        </section>

        <section id="projects">
          <h2 className="text-3xl border-b border-cyan-500 pb-2">Projects</h2>
          <ul className="mt-2 list-disc list-inside text-cyan-100">
            <li><strong>Binary Encoder</strong> – Assembly code to transform 'Victory' into encoded values.</li>
            <li><strong>Type Checker</strong> – OCaml engine that optimizes and checks SmallC syntax trees.</li>
            <li><strong>Personal Website</strong> – This one! Built in React and styled with Tailwind.</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-3xl border-b border-cyan-500 pb-2">Contact</h2>
          <p className="mt-2 text-cyan-100">
            Email me at <a className="text-pink-400 hover:underline" href="mayacleveland25@gmail.com">mayacleveland25@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
export default App;
