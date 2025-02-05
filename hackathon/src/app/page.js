import Features from "./components/Features";
import Hero from "./components/Hero";
import PricingComponent from "./components/PricingComponent";
import Dashboard from "./components/Dashboard";
import Contacts from "./components/contacts";
import AboutUs from "./components/About";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="bootcamps">
        <Features />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}