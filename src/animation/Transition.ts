export type Transition = (ratio: number) => number;

const linear: Transition = (ratio: number): number => {
  return ratio;
};

const easeIn: Transition = (ratio: number): number => {
  return ratio * ratio * ratio;
};

const easeOut: Transition = (ratio: number): number => {
  const invRatio = ratio - 1;
  return invRatio * invRatio * invRatio + 1;
};

const easeInOut: Transition = (ratio: number): number => {
  return easeCombined(easeIn, easeOut, ratio);
};

function easeCombined(
  startFunc: Transition,
  endFunc: Transition,
  ratio: number
): number {
  if (ratio < 0.5) {
    return 0.5 * startFunc(ratio * 2);
  }

  return 0.5 * endFunc((ratio - 0.5) * 2) + 0.5;
}

export const Transitions = {
  linear,
  easeIn,
  easeOut,
  easeInOut
};
