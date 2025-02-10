'use client'; // Only needed for Next.js App Router

import { useCallback } from 'react';
// import { loadSlim } from 'tsparticles-slim'; // Slim version for performance
import { loadLinksPreset } from 'tsparticles-preset-links';
import Particles from 'react-particles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    // await loadSlim(engine); // Load base particles
    await loadLinksPreset(engine); // Load links preset
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        preset: 'links',
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
