import { useState } from "react";
import reactPng from "/src/assets/react.svg.png";
import typescriptPng from "/src/assets/typescript.svg.png";
import tailwindPng from "/src/assets/tailwind.svg";

import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  function introHandler() {
    setClicked(true);
  }

  if (!clicked) {
    return (
      <main
        onClick={introHandler}
        className="font-montserrat w-11/12 h-screen m-auto"
      >
        <div className=" heading pt-8">
          <p className="font-light">Hi! My name is</p>
          <p className="text-3xl font-medium">Quan Pham,</p>
          <p className="font-light">
            I'm a <span className="text-sky-300">Front End</span> Web Developer
            located in Los Angeles.
          </p>
        </div>
        <div className="fade">
          <p className="text-center mt-60 text-2xl animate-bounce">Tap!</p>
        </div>
      </main>
    );
  } else {
    return (
      <main
        onClick={introHandler}
        className="font-montserrat w-11/12 h-screen m-auto"
      >
        <div className=" pt-8 heading">
          <p className="font-light">Hi! My name is</p>
          <p className="text-3xl font-medium">Quan Pham,</p>
          <p className="font-light">
            I'm a <span className="text-sky-300">Front End</span> Web Developer
            located in Los Angeles.
          </p>
          <div className="fade">
            <div className="pt-7 flex justify-between">
              <div>
                <a
                  href="#skills"
                  className="bg-zinc-500 p-1 rounded font-medium"
                >
                  SKILLS
                </a>
                <img
                  src={reactPng}
                  alt="React Image"
                  className="w-16 mt-6 m-auto"
                />
                <p className="text-center mt-6">React</p>
              </div>
              <div>
                <a
                  href="#projects"
                  className="bg-slate-100 p-1 rounded text-black font-medium"
                >
                  PROJECTS
                </a>
                <img
                  src={typescriptPng}
                  alt="React Image"
                  className="w-16 mt-6 m-auto"
                />
                <p className="text-center mt-4">TypeScript</p>
              </div>

              <div>
                <a
                  href="#contact"
                  className="bg-slate-100 p-1 rounded text-black font-medium"
                >
                  CONTACT
                </a>
                <img
                  src={tailwindPng}
                  alt="React Image"
                  className="w-17 mt-8 m-auto"
                />
                <p className="text-center mt-5">Tailwind</p>
              </div>
            </div>
            <p className="mt-14 leading-10">
              I have a proficiency in JavaScript, enriched by various hands-on
              experiences such as making API calls, leveraging prototypes and
              inheritance, handling promises, and implementing AJAX. I also
              posses a command of HTML and CSS3 to round out my web development
              skillset.
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
