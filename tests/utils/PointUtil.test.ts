import { Point } from 'pixi.js';

import * as PointUtil from '../../src/utils/PointUtil';

describe('Test PointUtil functions', () => {
  it('should compute linear interpolation between two points', () => {
    const start = new Point(-5, 5);
    const end = new Point(5, -5);

    let actual = PointUtil.lerp(start, end, -0.01);
    expect(actual.x).toBe(-5.1);
    expect(actual.y).toBe(5.1);

    actual = PointUtil.lerp(start, end, 0);
    expect(actual.x).toBe(-5);
    expect(actual.y).toBe(5);

    actual = PointUtil.lerp(start, end, 0.5);
    expect(actual.x).toBe(0);
    expect(actual.y).toBe(0);

    PointUtil.lerp(start, end, 1, actual);
    expect(actual.x).toBe(5);
    expect(actual.y).toBe(-5);

    PointUtil.lerp(start, end, 1.01, actual);
    expect(actual.x).toBe(5.1);
    expect(actual.y).toBe(-5.1);
  });

  it('should compute quadratic interpolation between two points', () => {
    const start = new Point(-5, 5);
    const control = new Point(0, 0);
    const end = new Point(5, -5);

    let actual = PointUtil.qerp(start, control, end, -0.01);
    expect(actual.x).toBeCloseTo(-5.1);
    expect(actual.y).toBeCloseTo(5.1);

    actual = PointUtil.qerp(start, control, end, 0);
    expect(actual.x).toBe(-5);
    expect(actual.y).toBe(5);

    actual = PointUtil.qerp(start, control, end, 0.5);
    expect(actual.x).toBe(0);
    expect(actual.y).toBe(0);

    PointUtil.qerp(start, control, end, 1, actual);
    expect(actual.x).toBe(5);
    expect(actual.y).toBe(-5);

    PointUtil.qerp(start, control, end, 1.01, actual);
    expect(actual.x).toBeCloseTo(5.1);
    expect(actual.y).toBeCloseTo(-5.1);
  });

  it('should compute the distance between two points', () => {
    const a = new Point(0, 0);
    const b = new Point(3, 4);

    const actual = PointUtil.distance(a, b);
    expect(actual).toBe(5);
  });
});
