
import HeroSection from "./components/HeroSection";
import HelpSection from "./components/HelpSection";
import TalentSuccessSection from "./components/TalentSuccessSection";
import Features from "./components/Features";
import FooterSection from "./components/FooterSection";
import AnimatedSection from "./components/AnimatedSection";
import { animations } from "./utils/scrollAnimations";

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <AnimatedSection animation={animations.perspectiveReveal}>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection animation={animations.perspectiveReveal}>
        <HelpSection />
      </AnimatedSection>

      <AnimatedSection animation={animations.perspectiveReveal}>
        <TalentSuccessSection />
      </AnimatedSection>

      <AnimatedSection animation={animations.perspectiveReveal}>
        <Features />
      </AnimatedSection>

      {/* Footer without scroll animation */}
      <section className="snap-start">
        <FooterSection />
      </section>
    </div>
  );
};

export default App;
