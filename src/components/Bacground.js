import React, { useCallback } from "react"; // call back function for dont recreate paticlesInit on every render
import Particles from "react-tsparticles"; //paticales animation engine
import { loadSlim } from "tsparticles-slim"; // load the slim version of the engine to reduce bundle size

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // load only slim version
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // configuration  for the particles animation
      options={{
        background: { color: "background: radial-gradient(1000px 1000px at 80% 10%, #1a1f39 0%, #0f1220 45%, #0b0e19 100%);" },
        fpsLimit: 60, //60 freames per second
        interactivity: { //onHover + repluse particles move away from mouse then hover
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        },
        //particales properites
        particles: {
          color: { value: "#6ea8fe" },
          links: {
            color: "#6ea8fe",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          //around at speed 1.5 and bounce when reach the edge
          move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true, //makes particles sharper on high-resolution screens
      }}
    />
  );
}

export default Background;
