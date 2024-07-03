import React from "react"
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
//components
import ImageSlider from "../components/Home/ImageSlider";
import GridSection from "@/components/Home/Grid";
import PricingInfo from "@/components/Home/PricingInfo";
import Instruction from "@/components/Home/Instruction";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className="cursor-default">
      <Head>
        <meta name="description" content="Ekocab LLC" />
        <meta name="keywords" content="Ekocab, ekocab, taxi, airport, Airport, cab, Cab, Service, service" />
        <meta charSet="utf-8" />
        <meta property="og:description" content="Нисэх онгоцны буудал хүргэх,тосох үйлчилгээ." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ekocab LLC" />
        <meta property="og:description" content="Ekocab LLC Service Website" />
        <meta property="og:url" content="https://ekocab.mn" />
      </Head>
      <ImageSlider />
      <div className="md:px-8 px-4 bg-[#f8f8f8]">
      <GridSection/>
        <PricingInfo />
        <Instruction />
      </div>
    </div>
  );
}
export default Home;
