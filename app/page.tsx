
"use client"
import banner from "@/app/src/Home/Assets/bannerVertici.jpg"
import Hero from "./src/Home/Components/Hero";
import AboutUs from "./src/Home/Components/AboutUs";
import QuebraConteudo from "./src/Home/Components/QuebraDeConteudo";

import Investidores from "./src/Home/Components/Investimentos";
import Contact from "./src/Home/Components/Contact";
import OqueAsEmpresasFalam from "./src/Home/Components/Socios";
import Midia from "./src/Home/Components/Midia";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <QuebraConteudo bannerSource={banner.src} />
      <Investidores/>
      <OqueAsEmpresasFalam />
      <Midia/>
      <Contact/>
    </>
  );
}
