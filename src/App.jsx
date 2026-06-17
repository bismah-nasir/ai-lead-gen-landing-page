import { useState } from "react";
import WhyChooseUs from "./components/WhyChooseUs";
import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <WhyChooseUs />

            <Testimonials />
            <FinalCTA />
            <Portfolio />
        </>
    );
}

export default App;
