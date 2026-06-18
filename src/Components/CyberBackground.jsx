import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CyberBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fpsLimit: 120,
    fullScreen: {
      enable: false,
      zIndex: 1, 
    },
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 90, 
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#A000A0", "#800080", "#170328"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, 
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#A000A0", 
        opacity: 1,     
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2, 
        direction: "none", 
        random: false,
        straight: false,
        outModes: {
          default: "out", 
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", 
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.6,
          },
        },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return <Particles id="cyber-plexus" className="cyber-canvas-layer" options={options} />;
}