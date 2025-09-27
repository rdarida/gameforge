import { Binder } from './Binder';

export class List<T> {
  private readonly _first: Binder;
  private readonly _last: Binder;
  private _size: number;

  public get size(): number {
    return this._size;
  }

  constructor() {
    this._first = new Binder();
    this._last = new Binder();
    this._size = 0;
  }
}
