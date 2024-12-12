import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { useMenuContext } from "../contexts/MenuContext";

export default function HamburgerMenu({ setIsTransitioning }) {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (isMenuOpen) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          height: "100vh",
          transition: "transform 0.3s ease-in-out",
        }}
        className="burger-menu h-full w-full absolute bg-[#0F402C] top-0 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <ul
          class="relative text-5xl flex flex-col gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <Link
              to="/"
              onClick={() => {
                toggleMenu();
              }}
              className="playwrite text-3xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="playwrite text-3xl"
              to="/about"
              onClick={() => {
                toggleMenu();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="playwrite text-3xl"
              to="/contact"
              onClick={() => {
                toggleMenu();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}
