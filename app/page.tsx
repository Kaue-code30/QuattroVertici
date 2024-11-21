
"use client"
import banner from "@/app/src/Home/Assets/bannerVertici.jpg"
import Hero from "./src/Home/Components/Hero";
import AboutUs from "./src/Home/Components/AboutUs";
import QuebraConteudo from "./src/Home/Components/QuebraDeConteudo";
import Socios from "./src/Home/Components/Socios";
import Investidores from "./src/Home/Components/Investimentos";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Socios />
      <QuebraConteudo bannerSource={banner.src} />
      <Investidores/>
    </>
  );
}
