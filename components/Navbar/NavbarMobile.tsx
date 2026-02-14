import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { navData } from "./data";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface NavbarContentProps {
  onToggle: () => void;
}

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav
      className={`${
        showMenu ? "top-0 bottom-0" : ""
      } z-50 fixed w-full bg-white dark:bg-gray-900 shadow-md sm:hidden`}
    >
      <div className="flex flex-col">
        <div className="flex p-4 items-center">
          {showMenu ? (
            <div
              className="flex-1 text-right dark:text-white"
              onClick={handleMenu}
            >
              <i className="bx bx-x bx-md cursor-pointer"></i>
            </div>
          ) : (
            <div className="flex flex-1 items-center">
              <div className="flex-1 text-center dark:text-white">
                Souvik Jana
              </div>
              <ThemeToggle />
              <i
                className="bx bx-menu bx-md ml-2 cursor-pointer dark:text-white"
                onClick={handleMenu}
              ></i>
            </div>
          )}
        </div>
        {showMenu && <NavbarContent onToggle={handleMenu} />}
      </div>
    </nav>
  );
};

const NavbarContent = ({ onToggle }: NavbarContentProps) => {
  const router = useRouter();

  return (
    <div className="w-full mt-4 flex justify-center">
      <ul className="flex flex-col">
        {navData.map((data) => {
          const { name, route, component, target } = data;
          return (
            <li
              key={name}
              className={`list-none m-4 text-xl font-bold dark:text-white ${
                router.pathname === route ? "underline underline-offset-4" : ""
              }`}
            >
              <Link href={route}>
                <a onClick={onToggle} target={target}>
                  {component}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMobile;
