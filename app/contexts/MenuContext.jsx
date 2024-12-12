import { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export function useMenuContext() {
  return useContext(MenuContext);
}

// eslint-disable-next-line react/prop-types
export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
