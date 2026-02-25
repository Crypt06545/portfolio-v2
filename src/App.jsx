import { useState } from "react";

import Background from "./components/Background";
import EditorCard from "./components/EditorCard";
import HeroSection from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Background>
        <HeroSection />
      </Background>
    </>
  );
}

export default App;
