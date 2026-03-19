type RevealUpOptions = {
  reducedMotion: boolean;
  y?: number;
  duration?: number;
  ease?: string;
};

type RevealStaggerOptions = {
  reducedMotion: boolean;
  y?: number;
  duration?: number;
  ease?: string;
  staggerChildren?: number;
  delayChildren?: number;
};

export function getRevealUpVariants({
  reducedMotion,
  y = 24,
  duration = 0.5,
  ease = "easeOut",
}: RevealUpOptions) {
  const safeDuration = reducedMotion ? 0.01 : duration;
  const safeY = reducedMotion ? 0 : y;

  return {
    hidden: { opacity: 0, y: safeY },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: safeDuration, ease },
    },
  };
}

export function getRevealStaggerVariants({
  reducedMotion,
  y = 32,
  duration = 0.6,
  ease = "easeOut",
  staggerChildren = 0.06,
  delayChildren = 0.03,
}: RevealStaggerOptions) {
  const safeDuration = reducedMotion ? 0.01 : duration;
  const safeY = reducedMotion ? 0 : y;
  const safeStagger = reducedMotion ? 0 : staggerChildren;
  const safeDelay = reducedMotion ? 0 : delayChildren;

  return {
    hidden: { opacity: 0, y: safeY },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: safeDuration,
        ease,
        staggerChildren: safeStagger,
        delayChildren: safeDelay,
      },
    },
  };
}

