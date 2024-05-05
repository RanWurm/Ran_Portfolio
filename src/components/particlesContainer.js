import { useEffect, useMemo } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, style }) => {
  useEffect(() => {
    // Initialize the particles engine only once when the component is mounted
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);  // Load the 'slim' preset, you can change this to 'full', 'basic', etc., based on needs
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);  // This logs the initialized particles container
  };

  const options = useMemo(() => ({
    background: {
      color: {
		value: "transparent",  // Background color of the particles area
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#6b0a29",  // Color of the particles
      },
      links: {
        color: "#6b0a29",
        distance: 200,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: false,
  }), []);

  // The Particles component from tsParticles is used here with the provided options
  return <Particles id={id} init={particlesLoaded} options={options} style={style} />;
};

export default ParticlesComponent;
