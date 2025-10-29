import { useState } from "react";
import FullWidthNavbar from './../components/Navbar';
import Hero from "./../components/Hero";
import NameAnimation from './../components/NameAnimation';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className={`transition-colors duration-1000 ${introFinished ? "bg-[#f9f7f3]" : "bg-black"} min-h-screen`}>
      {!introFinished && <NameAnimation onFinish={() => setIntroFinished(true)} />}
      {introFinished && (
        <>
          <FullWidthNavbar />
          <Hero />
        </>
      )}
    </div>
  );
}
