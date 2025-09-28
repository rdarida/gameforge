import { Binder } from '../../../src/utils/list/Binder';

describe('Test Binder class', () => {
  it('should be truthy', () => {
    const binder = new Binder();
    expect(binder).toBeTruthy();
    expect(binder.prev).toBe(binder);
    expect(binder.next).toBe(binder);
  });

  it('should bind three Binder instances together', () => {
    const a = new Binder();
    const b = new Binder();
    const c = new Binder();

    a.bind(c);

    expect(a.prev).toBe(a);
    expect(a.next).toBe(c);
    expect(c.prev).toBe(a);
    expect(c.next).toBe(c);

    a.bind(b);

    expect(a.next).toBe(b);
    expect(b.prev).toBe(a);
    expect(b.next).toBe(c);
    expect(c.prev).toBe(b);
  });

  it('should unlink a Binder instance from a chain', () => {
    const a = new Binder();
    const b = new Binder();
    const c = new Binder();

    a.bind(b);
    b.bind(c);

    expect(a.prev).toBe(a);
    expect(a.next).toBe(b);
    expect(b.prev).toBe(a);
    expect(b.next).toBe(c);
    expect(c.prev).toBe(b);
    expect(c.next).toBe(c);

    b.unbind();

    expect(b.prev).toBe(b);
    expect(b.next).toBe(b);

    expect(a.prev).toBe(a);
    expect(a.next).toBe(c);
    expect(c.prev).toBe(a);
    expect(c.next).toBe(c);
  });
});
