import { Binder } from '../../../src/utils/list/Binder';

describe('Test Binder class', () => {
  it('should be truthy', () => {
    const binder = new Binder();
    expect(binder).toBeTruthy();
    expect(binder.prev).toBe(binder);
    expect(binder.next).toBe(binder);
  });
});
