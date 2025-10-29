import { useState } from "react";
import NameAnimation from "../components/NameAnimation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <div> 
      {!showMain ? (
        <NameAnimation onFinish={() => setShowMain(true)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
};

export default Home;
