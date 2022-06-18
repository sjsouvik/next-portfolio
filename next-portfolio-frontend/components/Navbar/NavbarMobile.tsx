import Image from "next/image";
import { useState } from "react";
import { navData } from "./data";

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        showMenu ? "top-0 bottom-0" : ""
      } z-50 fixed w-full bg-white shadow-md sm:hidden`}
    >
      <div className="flex flex-col">
        <div className="w-full flex justify-end p-4" onClick={handleMenu}>
          {showMenu ? (
            <Image
              src="https://img.icons8.com/material-outlined/24/undefined/delete-sign.png"
              height="20"
              width="20"
              alt="close"
            />
          ) : (
            <Image
              src="https://img.icons8.com/material-outlined/24/undefined/menu--v3.png"
              height="20"
              width="20"
              alt="menu"
            />
          )}
        </div>
        {showMenu && <NavbarContent />}
      </div>
    </div>
  );
};

const NavbarContent = () => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <ul className="flex flex-col">
        {navData.map((data) => {
          const { name } = data;
          return (
            <li key={name} className="list-none">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarMobile;
