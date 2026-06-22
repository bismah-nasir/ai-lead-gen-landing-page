import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="font-body">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <Contact />
            <FinalCTA />
        </div>
    );
}

export default App;
