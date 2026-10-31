import About from "../components/About";
import Certificates from "../components/Certificates";
import ContactForm from "../components/ContactForm";
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
      <main id="konten-utama" tabIndex="-1">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Certificates />
        <Interests />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
