import React from "react";
import Slider from "./Slider";
import Card1 from "./Card1";
import  Card2  from "./Card2";
//import Footer from "./Footer/Footer"
import { Navigationbar } from "./Navigationbar";
//import Footer from "./Footer/Footer";

export function Home() {
  return (
    <>
    <Navigationbar/>
      <Slider/>
      <Card2/>
      <Card1/>
    </>
  );
}


