import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PricingComponent from "./components/PricingComponent";
import Dashboard from "./components/Dashboard";
import Contacts from "./components/contacts";
import AboutUs from "./components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Contacts />
    </div>
  );
}
