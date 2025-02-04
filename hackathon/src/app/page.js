import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PricingComponent from "./components/PricingComponent";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <PricingComponent />
      <Dashboard />
    </div>
  );
}
