export const animations = {
  fadeZoom: {
    hidden: { opacity: 0, scale: 0.85, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      },
    },
  },

  slideFadeLeft: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  },

  slideFadeRight: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  },

  rotateInZoom: {
    hidden: { rotate: -15, scale: 0.7, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.1,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },

  dropIn: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 1.3,
      },
    },
  },

  perspectiveReveal: {
    hidden: {
      opacity: 0,
      rotateX: 45,
      scale: 0.9,
      transformOrigin: "top center",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: "easeInOut",
      },
    },
  },
};
