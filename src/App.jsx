import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <Hero />
        <AboutMe/>
        <Services/>
        <Projects/>
        <ContactMe/>
      <Footer/>

      </div>
    </>
  );
}

export default App;
