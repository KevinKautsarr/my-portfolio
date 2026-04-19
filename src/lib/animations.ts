// Reusable animation presets for Framer Motion

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
} as const;

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
} as const;

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
} as const;

export const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
} as const;

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
} as const;

export const TRANSITIONS = {
  fast: { duration: 0.3 },
  default: { duration: 0.5 },
  slow: { duration: 0.8 },
  page: { duration: 0.6 },
} as const;

export const staggeredTransition = (index: number, baseDelay = 0.1) => ({
  duration: 0.5,
  delay: index * baseDelay,
});
