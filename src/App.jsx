import AboutMe from "./components/About/AboutMe";
import Hero from "./components/Hero/Hero";
import Services from "./components/port-service/Services";
import Projects from "./components/Projects/Projects";
import Nav from "./components/NavBar/Nav";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    // <Router>
    //     <Nav /> {/* Navbar is always visible */}
    //     <Routes>
    //       {/* Define routes for each section */}
    //       <Route path="/" element={<Hero />} />
    //       <Route path="/about" element={<AboutMe />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/contact" element={<ContactMe />} />
    //     </Routes>
    //     <Footer /> {/* Footer is always visible */}
    // </Router>
    <>
      <Nav />

      <div className="overflow-hidden">
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
