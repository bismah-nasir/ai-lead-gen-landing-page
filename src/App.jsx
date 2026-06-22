import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";

function App() {
    return (
        <div className="font-body">
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <FinalCTA />
        </div>
    );
}

export default App;
