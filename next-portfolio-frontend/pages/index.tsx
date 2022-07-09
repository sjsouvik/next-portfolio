import Head from "next/head";
import Image from "next/image";
import NavbarMobile from "../components/Navbar/NavbarMobile";
import Timeline from "../components/Timeline/Timeline";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import NavbarDesktop from "../components/Navbar/NavbarDesktop";
import Button from "../components/Buttons/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      <NavbarMobile />
      <main className="px-4 lg:px-0 m-auto max-w-3xl">
        <NavbarDesktop />

        <div className="sm:pt-0 pt-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          dicta consequatur mollitia cumque autem quidem in, quod suscipit? Esse
          excepturi ex veniam iste, obcaecati omnis quidem praesentium eos ullam
          consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Blanditiis dicta consequatur mollitia cumque autem quidem in, quod
          suscipit?
        </div>

        <Timeline />

        <div className="flex flex-wrap">
          <Card />
          <Card />
        </div>

        <Button>visit site</Button>

        <Footer />
      </main>
    </div>
  );
}
