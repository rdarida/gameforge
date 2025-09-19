import { Transitions } from '../../src/animation';

describe('Test Transition functions', () => {
  it('should apply linear transition', () => {
    const actual = Transitions.linear(0.5);
    expect(actual).toBe(0.5);
  });

  it('should apply easeIn transition', () => {
    const actual = Transitions.easeIn(0.1);
    expect(actual).toBeCloseTo(0.001, 3);
  });

  it('should apply easeOut transition', () => {
    const actual = Transitions.easeOut(0.9);
    expect(actual).toBeCloseTo(0.999, 3);
  });

  it('should apply easeInOut transition', () => {
    let actual = Transitions.easeInOut(0.1);
    expect(actual).toBeCloseTo(0.004, 3);

    actual = Transitions.easeInOut(0.9);
    expect(actual).toBeCloseTo(0.996, 3);
  });
});
