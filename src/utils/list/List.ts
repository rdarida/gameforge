import { Binder } from './Binder';

export class List<T> {
  private readonly _head: Binder;
  private readonly _tail: Binder;
  private _size: number;

  public get size(): number {
    return this._size;
  }

  constructor() {
    this._head = new Binder();
    this._tail = new Binder();
    this._size = 0;
  }
}
