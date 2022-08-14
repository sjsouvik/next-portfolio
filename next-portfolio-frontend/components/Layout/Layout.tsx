import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import NavbarDesktop from "../Navbar/NavbarDesktop";
import NavbarMobile from "../Navbar/NavbarMobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Souvik Jana | Portfolio</title>
        <meta
          name="description"
          content="Souvik's Portfolio: to showcase all his side-projects and blogs at one place with other info"
        />
      </Head>
      <NavbarMobile />
      <div className="px-4 lg:px-0 max-w-4xl m-auto">
        <NavbarDesktop />
        <main className="pt-20 md:pt-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
