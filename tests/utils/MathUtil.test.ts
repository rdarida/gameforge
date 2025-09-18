import { MathUtil } from '../../src/utils';

describe('Test MathUtil functions', () => {
  it('should round a number to a specified number of deciamal places', () => {
    let actual = MathUtil.round(Math.PI);
    expect(actual).toBe(3);

    actual = MathUtil.round(Math.PI, 2);
    expect(actual).toBe(3.14);
  });

  it('should clamp a number to the default or a custom range', () => {
    let actual = MathUtil.clamp(-1);
    expect(actual).toBe(0);

    actual = MathUtil.clamp(0.5);
    expect(actual).toBe(0.5);

    actual = MathUtil.clamp(2);
    expect(actual).toBe(1);

    actual = MathUtil.clamp(-6, -5, 5);
    expect(actual).toBe(-5);

    actual = MathUtil.clamp(0, -5, 5);
    expect(actual).toBe(0);

    actual = MathUtil.clamp(6, -5, 5);
    expect(actual).toBe(5);
  });

  it('', () => {
    let actual = MathUtil.lerp(-5, 5, -0.99);
    expect(actual).toBe(-5);

    actual = MathUtil.lerp(-5, 5, 0.5);
    expect(actual).toBe(0);

    actual = MathUtil.lerp(-5, 5, 1.01);
    expect(actual).toBe(5);

    actual = MathUtil.lerp(5, -5, -0.99);
    expect(actual).toBe(5);

    actual = MathUtil.lerp(5, -5, 0.5);
    expect(actual).toBe(0);

    actual = MathUtil.lerp(5, -5, 1.01);
    expect(actual).toBe(-5);
  });
});
