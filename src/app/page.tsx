import { url } from "inspector";
import Image from "next/image";
import NavBar from "./NavBar";
import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "@/Contact";

export default function Home() {
  return (
    <main
      className=" w-full"
      style={{
        height: "50vh",
      }}
    >
      <div className=" bg-sky-950 fixed w-full ">
        <NavBar />
        <Header />
      </div>
      <div className=" h-80 pr-40 pt-32">
        <img src="mech1.jpeg" className=" img-f  " />
      </div>

      <Search />
      <Footer />
      <Contact />
    </main>
  );
}
