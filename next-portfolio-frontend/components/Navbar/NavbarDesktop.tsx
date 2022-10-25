import Link from "next/link";
import { useRouter } from "next/router";
import { navData } from "./data";

const NavbarDesktop = () => {
  const router = useRouter();

  return (
    <div className="hidden sm:block">
      <nav className="flex py-6 justify-between items-center">
        <Link href="/">
          <a>Souvik Jana</a>
        </Link>
        <ul className="flex space-x-8">
          {navData.map(({ name, component, route, target }) => (
            <li
              key={name}
              className={`navbar__item ${
                router.pathname === route ? "underline underline-offset-2" : ""
              }`}
            >
              <Link href={route}>
                <a target={target}>{component}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
