import { useState } from "react";
import { useMenuContext } from "../contexts/MenuContext.jsx";

export const meta = () => {
  return [
    { title: "About" },
    {
      name: "description",
      content: "About Mike",
    },
  ];
};

export default function About() {
  const [copied, setCopied] = useState(false);
  const { isMenuOpen, toggleMenu } = useMenuContext();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("mike.dev.design@gmail.com");
    setCopied(true);
  };

  return (
    <>
      {/* <Header showAbout /> */}
      <div
        className="lg:max-w-[1200px] md:max-w-[820px] px-4 md:px-20 mx-auto pb-16 pt-28 md:py-32"
        onClick={() => isMenuOpen && toggleMenu()}
        role="button"
        tabIndex={-1}
        onKeyDown={() => isMenuOpen && toggleMenu()}
      >
        <div className="flex-col-simple text-center !gap-6 md:!gap-10">
          <h1 className=" neon-text flicker-less">About me</h1>
          <div className="flex flex-col sm:inline-block text-start">
            <div className="w-fit relative sm:float-right lg:-right-4 sm:ml-4 pb-8">
              <ul className="border p-4">
                <li>Michael Harfenist</li>
                <li className="my-2">
                  <a
                    href="mailto:mike.dev.design@gmail.com"
                    className="text-blue-300 hover:text-white underline"
                  >
                    mike.dev.design@gmail.com
                  </a>{" "}
                  ||{" "}
                  <button
                    className="text-sm border-none text-blue-300 hover:text-white underline"
                    onClick={copyToClipboard}
                  >
                    {copied ? "copied" : "copy"}
                  </button>
                </li>
                <li className="mt-2">Charleston, South Carolina</li>
                {/* <li className="my-2">
                  <a
                    id="download"
                    className="neon-text border-none"
                    href="/harfenist_resume_public.docx"
                    download
                  >
                    Resume Download
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="sm:mx-12 sm:px-2">
              <p>
                My experience as a Full Stack Web Developer and Software
                Engineer has been incredibly enriching. <br />
                <br /> I consider myself a well-rounded developer having had
                experience in many roles; from building a powerful API as a new
                platform’s foundation, to creating beutiful, interactive, and
                itterable web pages.
                <br />
                <br />
                For my next role, I am aiming for a front-end position. I hope
                to advanced my front-end skills by bringing my pre-existing
                talents and a mind hungry to learn more through experience and
                collaboration. <br /> <br />
                My passion for coding is fueled by my desire to create, I find
                the reality that my creation has the potential to reach millions
                deeply inspiring. I cannot escape the desire to sculpt
                captivating and beautiful web experiences.
                <br />
                <br />
                Carrying a strong passion for technology, I spend much of my
                free time learning how to produce music, creating 2D games with
                Godot, taking on small personal projects to test libraries, and
                creating pixel art for my games as well as realize personal
                ideas with Aseprite. Beyond the digital landscape, I find peace
                through meditation, reading, and cooking delicious meals for
                friends. All the while I scratch my need for adventure through
                travel, skateboarding, and seeing live music.
              </p>
              <div className="flex flex-col-reverse gap-2 pt-4 sm:p-0 sm:inline-block text start">
                <br />
                <img
                  src="/in_office_cropped_close.jpg"
                  alt="self working in office"
                  className="relative sm:-left-4 pr-2 sm:float-left rounded-2xl object-cover object-left-top w-[400px] h-[300px]"
                />
                <p>
                  Carrying a strong passion for technology, I spend much of my
                  free time learning how to produce music, creating 2D games
                  with Godot, taking on small personal projects to test
                  libraries, and creating pixel art for my games as well as
                  realize personal ideas with Aseprite. Beyond the digital
                  landscape, I find peace through meditation, reading, and
                  cooking delicious meals for friends. All the while I scratch
                  my need for adventure through travel, skateboarding, and
                  seeing live music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
