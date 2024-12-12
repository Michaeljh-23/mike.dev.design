import { Link } from "@remix-run/react";
import { clsx } from "clsx";
import HamburgerNav from "./HamburgerNav";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { useMenuContext } from "../contexts/MenuContext";
import { useLocation } from "@remix-run/react";

// eslint-disable-next-line react/prop-types
export default function Header({ isHome = false, showAbout = false }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const location = useLocation();
  const tabs = ["Home", "About", "Contact"];

  return (
    <>
      <div className="flex justify-between items-center !text-white absolute pt-4 w-full px-4 md:px-12 min-h-[111px] z-20">
        <div className="flex items-center gap-10">
          {!isHome ? (
            <Link
              to="/"
              className="flex gap-1 justify-center relative"
              onClick={() => isMenuOpen && toggleMenu()}
            >
              <img
                className="max-w-12 md:max-w-14 object-contain"
                src="./lil_ol_me_resize.gif"
                alt="pixel sprite gif of me"
              />
            </Link>
          ) : (
            <h1 className="neon-text flicker col-span-12 text-[32px] md:text-[40px] lg:text-[50px] relative w-full">
              Michael Harfenist
            </h1>
          )}
          <div
            className={clsx(
              "mt-4 hidden md:block",
              !showAbout && "!hidden md:!hidden"
            )}
          ></div>
        </div>
        <div className="flex justify-end md:justify-center relative h-full md:opacity-0 z-[-1]">
          <HamburgerNav />
        </div>

        <div className="gap-11 lg:gap-12 justify-center relative h-full hidden md:flex">
          {tabs.map((tab, i) => (
            <Link
              to={
                tab.toLocaleLowerCase() === "home"
                  ? "/"
                  : `/${tab.toLocaleLowerCase()}`
              }
              key={i}
              className={
                location.pathname.toLocaleLowerCase() === "/" &&
                tab.toLocaleLowerCase() === "home"
                  ? "underline"
                  : location.pathname.toLocaleLowerCase() ===
                    `/${tab.toLocaleLowerCase()}`
                  ? "underline"
                  : ""
              }
            >
              <h3 className="text-[12px] lg:text-sm !my-0" key={i}>
                {tab}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      <button
        className="w-full h-full absolute"
        style={{
          zIndex: isMenuOpen || isTransitioning ? 10 : -1,
        }}
        onClick={() => {
          isMenuOpen && toggleMenu();
        }}
      >
        <HamburgerMenu setIsTransitioning={setIsTransitioning} />
      </button>
    </>
  );
}
