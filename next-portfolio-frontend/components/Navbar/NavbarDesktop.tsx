import Link from "next/link";
import { navData } from "./data";

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:block">
      <nav className="flex py-6 justify-between items-center">
        <div>Souvik Jana</div>
        <ul className="flex space-x-8">
          {navData.map(({ name, component, route }) => (
            <li key={name} className="navbar__item">
              <Link href={route}>
                <a>{component}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
