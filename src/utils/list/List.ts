import { Binder } from './Binder';
import { Item } from './Item';

export class List<T> {
  private readonly _first: Binder;
  private readonly _last: Binder;
  private _length: number;

  public get length(): number {
    return this._length;
  }

  constructor() {
    this._first = new Binder();
    this._last = new Binder();
    this._first.bind(this._last);

    this._length = 0;
  }

  public getFirst(): Item<T> | undefined {
    return 0 < this._length ? (this._first.next as Item<T>) : undefined;
  }

  public getLast(): Item<T> | undefined {
    return 0 < this._length ? (this._last.prev as Item<T>) : undefined;
  }

  public addFirst(element: T): Item<T> {
    return this.link(this._first, element);
  }

  public addLast(element: T): Item<T> {
    return this.link(this._last.prev, element);
  }

  public removeFirst(): Item<T> | undefined {
    return this.unlink(this.getFirst());
  }

  public removeLast(): Item<T> | undefined {
    return this.unlink(this.getLast());
  }

  public clear(): void {
    while (0 < this.length) {
      this.removeFirst();
    }
  }

  public find(element: T): Item<T> | undefined {
    let item = this.getFirst();

    if (item == undefined) return undefined;

    while (item !== this._last) {
      if (item.data === element) {
        return item;
      } else {
        item = item.next as Item<T>;
      }
    }

    return undefined;
  }

  public contains(element: T): boolean {
    return this.find(element) != undefined;
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
