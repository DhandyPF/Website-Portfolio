import About from "../components/About";
import Certificates from "../components/Certificates";
// import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Interests from "../components/Interests";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certificates />
        <TechStack />
        <Interests />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </>
  );
}
