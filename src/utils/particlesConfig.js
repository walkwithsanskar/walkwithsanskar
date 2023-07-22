const particlesConfig = {
  autoPlay: true,
  background: {
    color: {
      value: "#000000",
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60, // Reduced the FPS limit for better performance
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4, // Increased the quantity of particles on click
        groups: ["confetti"], // Adding a custom group name for confetti particles
      },
      repulse: {
        distance: 100, // Adjust the repulse distance for better effect
        duration: 0.2,
      },
    },
  },
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 5,
        max: 10,
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      outModes: {
        default: "destroy",
        bottom: "destroy",
        left: "destroy",
        right: "destroy",
        top: "none",
      },
      random: false,
      straight: false,
    },
    rotate: {
      random: {
        enable: true,
        minimumValue: 0,
      },
      value: 45, // Set rotation value for confetti particles
      animation: {
        enable: true,
        speed: 60,
        sync: false,
      },
      direction: "random",
    },
    life: {
      count: 1,
      duration: {
        value: 1,
      },
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  emitters: [
    {
      rate: {
        delay: 0.1,
        quantity: 4,
      },
      position: {
        x: 50,
        y: 100,
      },
      size: {
        width: 100,
        height: 0,
        mode: "percent",
      },
      direction: "top",
      life: {
        duration: 0.1,
      },
      particles: {
        bounce: {
          vertical: {
            value: 1, // Set bounce value for confetti particles
            random: {
              enable: true,
              minimumValue: 0.5,
            },
          },
        },
        move: {
          speed: {
            min: 10,
            max: 20,
          },
        },
        rotate: {
          value: 90, // Set rotation value for confetti particles
          random: {
            enable: true,
            minimumValue: 45,
          },
          animation: {
            enable: true,
            speed: 60,
            sync: false,
          },
        },
      },
    },
  ],
};

export default particlesConfig;
