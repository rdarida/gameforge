export class Binder {
  protected _prev: Binder;
  protected _next: Binder;

  public get prev(): Binder {
    return this._prev;
  }

  public get next(): Binder {
    return this._next;
  }

  constructor() {
    this._prev = this;
    this._next = this;
  }

  public bind(prev: Binder): void {}

  public unbind(): void {}
}
