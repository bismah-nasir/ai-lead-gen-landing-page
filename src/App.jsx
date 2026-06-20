import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="font-body">
            <Navbar />
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <FinalCTA />
        </div>
    );
}

export default App;
