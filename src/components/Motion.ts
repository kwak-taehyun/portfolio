import {Variants} from 'framer-motion';

const bounceUp: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const bounceDown: Variants = {
  offscreen: {
    y: -200
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const upToShow: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 0.3
    }
  }
};

const rightToShow: Variants = {
  offscreen: {
    x:-100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.3
    }
  }
};

const leftToShow: Variants = {
  offscreen: {
    x:100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      ease: "linear", 
      duration: 0.3
    }
  }
};

const hideToShow: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "linear", 
      duration: 0.3
    }
  }
};

const hideToShowDelay: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "linear", 
      duration: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const effects = {bounceUp, bounceDown, upToShow, leftToShow, rightToShow, hideToShow, hideToShowDelay};