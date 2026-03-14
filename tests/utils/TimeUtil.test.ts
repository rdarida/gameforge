import * as TimeUtil from '../../src/utils/TimeUtil';

describe('Test TimeUtil functions', () => {
  it.each([
    [-1, '00:00'],
    [0, '00:00'],
    [0.1, '00:00'],
    [59, '00:59'],
    [60, '01:00'],
    [3599, '59:59'],
    [3600, '01:00:00'],
    [3661, '01:01:01']
  ])('should format %i second(s) as "%s"', (input, expected) => {
    let result = TimeUtil.formatTime(input);
    expect(result).toBe(expected);
  });
});
