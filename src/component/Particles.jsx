import React from 'react'
import Particle from 'react-tsparticles'

export const Particles = () => {
  return (
    <Particle
    options={{
      particles: {
        number: {
          value: 100,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 5,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    }}
  />
  )
}
