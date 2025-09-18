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

  it('should interpolate between two numbers', () => {
    let actual = MathUtil.lerp(-5, 5, -0.01);
    expect(actual).toBe(-5.1);

    actual = MathUtil.lerp(-5, 5, 0.5);
    expect(actual).toBe(0);

    actual = MathUtil.lerp(-5, 5, 1.01);
    expect(actual).toBe(5.1);

    actual = MathUtil.lerp(5, -5, -0.01);
    expect(actual).toBe(5.1);

    actual = MathUtil.lerp(5, -5, 0.5);
    expect(actual).toBe(0);

    actual = MathUtil.lerp(5, -5, 1.01);
    expect(actual).toBe(-5.1);
  });

  it('should shuffle an array of numbers', () => {
    const mockRandomValues = [0.75, 0.5, 0.25, 0.0];
    let callCount = 0;

    jest.spyOn(Math, 'random').mockImplementation(() => {
      const val = mockRandomValues[callCount % mockRandomValues.length];
      callCount++;
      return val;
    });

    const actual = MathUtil.shuffle([1, 2, 3, 4, 5]);
    expect(actual).toStrictEqual([2, 5, 1, 3, 4]);

    (Math.random as jest.Mock).mockRestore();
  });
});
