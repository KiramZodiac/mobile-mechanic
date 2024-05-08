import { url } from "inspector";
import Image from "next/image";
import NavBar from "./NavBar";
import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-red-200 ">
        <NavBar />
        <Header />
      </div>
      <div className=" h-80 pr-40">
        <img src="mech1.jpeg" className="float-right  " />
      </div>

      <Search />
      <Footer />
    </main>
  );
}
