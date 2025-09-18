import { MathUtil } from '../../src/utils';

describe('Test MathUtil functions', () => {
  it('should round a number to a specified number of deciamal places', () => {
    let actual = MathUtil.round(Math.PI);
    expect(actual).toBe(3);

    actual = MathUtil.round(Math.PI, 2);
    expect(actual).toBe(3.14);
  });
});
