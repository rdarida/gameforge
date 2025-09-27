export class Binder {
  protected _prev: Binder;
  protected _next: Binder;

  /**
   * Gets the previous Binder in the chain.
   */
  public get prev(): Binder {
    return this._prev;
  }

  /**
   * Gets the next Binder in the chain.
   */
  public get next(): Binder {
    return this._next;
  }

  /**
   * Creates a new Binder instance.
   *
   * Each Binder stats as a self-referencing circular node
   * (`prev = this`, `next = this`);
   */
  constructor() {
    this._prev = this;
    this._next = this;
  }

  /**
   * Binds the given Binder right after this one in the chain.
   *
   * @param next The Binder to insert after the current one.
   */
  public bind(next: Binder): void {
    const a = this;
    const b = next;
    const c = this._next;

    a._next = b;
    b._prev = a;

    if (a === c) return;

    b._next = c;
    c._prev = b;
  }

  /**
   * Unbinds this Binder instance from the chain.
   */
  public unbind(): void {
    const { _prev: a, _next: b } = this;

    a._next = b;
    b._prev = a;
    this._prev = this;
    this._next = this;
  }
}
