import { useState } from "react";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <WhyChooseUs />
            <Portfolio />
        </>
    );
}

export default App;
