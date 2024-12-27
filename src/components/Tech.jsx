import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

function TechCard({ technology }) {
  return (
    <div className="tech-card">
      <img src={technology.icon} alt={technology.name} />
      <p>{technology.name}</p>
    </div>
  );
}

const Tech = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768); // Initial state for screen size

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // Cleanup
  }, []); // Empty dependency array to run only once
 
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {" "}
           {isLargeScreen && <BallCanvas icon={technology.icon} />}{" "}
          {/* Conditional rendering based on screen size */}
          {!isLargeScreen && <TechCard technology={technology} />}{" "}
          {/* Render TechCard for mobile */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
