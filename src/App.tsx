import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import HelpSection from "./components/HelpSection";
import TalentSuccessSection from "./components/TalentSuccessSection";
import Features from "./components/Features";
import FooterSection from "./components/FooterSection";

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [<HelpSection />, <TalentSuccessSection />, <Features />, <FooterSection />];
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const handleScroll = (e: WheelEvent) => {
    const scrollTop = containerRef.current?.scrollTop || 0;

    // Allow free scroll in first 20vh
    if (scrollTop < window.innerHeight * 0.2) return;

    // Lock scroll and move to section
    e.preventDefault();
    scrollToNextSection();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="h-[20vh]">
        <HeroSection />
      </div>

      {sections.map((Section, index) => (
        <div
          key={index}
          className={`h-screen w-full transition-transform duration-1000 ease-in-out ${
            index === activeSection ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {Section}
        </div>
      ))}
    </div>
  );
};

export default App;
