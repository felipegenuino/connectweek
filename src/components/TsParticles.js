import React from 'react'
import Particles from 'react-particles-js';

function TsParticles() {
    return (
             
            <Particles 
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
        
                zIndex: -1,
                width: "100vw",
                hight: "100vh",
              }}
              params={{
                background: {
                  color: {
                    value: "#2B3134",
                  },
                },
                particles: {
                  color: {
                    value: "#2DAD71",
                  },
                  links: {
                    color: "#33584c",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                  },
                  draw: {
                    stroke: {
                      color: "#27483D",
                    },
                  },
                  number: {
                    value: 120,
                  },
                  size: {
                    value: 2,
                  },
                },
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                },
              }}
       />
     )
}

export default TsParticles
