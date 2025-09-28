import { Binder } from './Binder';
import { Item } from './Item';

export class List<T> {
  private readonly _head: Binder;
  private readonly _tail: Binder;
  private _length: number;

  public get length(): number {
    return this._length;
  }

  constructor() {
    this._head = new Binder();
    this._tail = new Binder();
    this._head.bind(this._tail);

    this._length = 0;
  }

  public getFirst(): Item<T> | undefined {
    return 0 < this._length ? (this._head.next as Item<T>) : undefined;
  }

  public getLast(): Item<T> | undefined {
    return 0 < this._length ? (this._tail.prev as Item<T>) : undefined;
  }

  public addFirst(element: T): Item<T> {
    return this.link(this._head, element);
  }

  public addLast(element: T): Item<T> {
    return this.link(this._tail.prev, element);
  }

  public removeFirst(): Item<T> | undefined {
    return this.unlink(this.getFirst());
  }

  private link(prev: Binder, element: T): Item<T> {
    const item = Item.parse(element);
    prev.bind(item);

    this._length++;

    return item;
  }

  private unlink(item: Item<T> | undefined): Item<T> | undefined {
    if (item == undefined) return undefined;

    item.unbind();

    this._length--;

    return item;
  }
}
