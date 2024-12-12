import { Squash as Hamburger } from "hamburger-react";
import { useMenuContext } from "../contexts/MenuContext.jsx";

export default function HamburgerNav() {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <div className="flex">
      <div className="relative z-50">
        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
      </div>
    </div>
  );
}
