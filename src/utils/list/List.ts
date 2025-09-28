import { Binder } from './Binder';
import { Item } from './Item';

/**
 * Represends a generic doubly-linked list.
 */
export class List<T> {
  private readonly _head: Binder;
  private readonly _tail: Binder;
  private _length: number;

  /**
   * Gets the first element in the list,
   * or `undefined` if the list is empty.
   */
  public get first(): Item<T> | undefined {
    return 0 < this._length ? (this._head.next as Item<T>) : undefined;
  }

  /**
   * Gets the last element in the list,
   * or `undefined` if the list is empty.
   */
  public get last(): Item<T> | undefined {
    return 0 < this._length ? (this._tail.prev as Item<T>) : undefined;
  }

  /**
   * Gets the number of elements in the list.
   */
  public get length(): number {
    return this._length;
  }

  /**
   * Creates a new empty List<T> instance.
   */
  constructor() {
    this._head = new Binder();
    this._tail = new Binder();
    this._head.bind(this._tail);

    this._length = 0;
  }

  /**
   * Inserts a new element at the beginning of the list.
   *
   * @param element The element to insert.
   * @returns The created Item wrapping the element.
   */
  public unshift(element: T): Item<T> {
    return this.link(this._head, element);
  }

  /**
   * Inserts a new element to the end of the list.
   *
   * @param element The element to insert.
   * @returns The created Item wrapping the element.
   */
  public push(element: T): Item<T> {
    return this.link(this._tail.prev, element);
  }

  /**
   * Removes and returns the first element of the list.
   *
   * @returns The removed Item, or `undefined` if the list is empty.
   */
  public shift(): Item<T> | undefined {
    return this.unlink(this.first);
  }

  /**
   * Removes and returns the last element of the list.
   *
   * @returns The removed Item, or `undefined` if the list is empty.
   */
  public pop(): Item<T> | undefined {
    return this.unlink(this.last);
  }

  /**
   * Removes all elements from the list.
   */
  public clear(): void {
    while (0 < this.length) {
      this.shift();
    }
  }

  /**
   * Finds the first item whose stored value mathes the given element.
   *
   * @param element The value to search for.
   * @returns The matching Item, or `undefined` if not found.
   */
  public find(element: T): Item<T> | undefined {
    for (const item of this) {
      if (item.data && item.data === element) return item;
    }

    return undefined;
  }

  /**
   * Determines whether the list contains the specified element.
   *
   * @param element The value to check for.
   * @returns True if the element is found, otherwise false.
   */
  public contains(element: T): boolean {
    return this.find(element) != undefined;
  }

  /**
   * Performs the specified action for each element in a list.
   *
   * @param callbackfn A function that accepts up to three arguments. forEach calls
   * the callbackfn function one time for each element in the list.
   * @param thisArg An object to which the this keyword can refer in the
   * callbackfn function. If thisArg is omitted, undefined is used as the
   * this value.
   */
  public forEach(
    callbackfn: (value: T, i: number, list: List<T>) => void,
    thisArg?: any
  ): void {
    let i = 0;

    for (const item of this) {
      callbackfn.call(thisArg, item.data, i++, this);
    }
  }

  /**
   * Calls a defined callback function on each element of a list, and returns
   * a list that contains the results.
   *
   * @param callbackfn A function that accepts up to three arguments. The map
   * method calls the callbackfn function one time for each element in the list.
   * @param thisArg An object to which the this keyword can refer in the
   * callbackfn function. If thisArg is omitted, undefined is used as the this
   * value.
   */
  public map<U>(
    callbackfn: (value: T, index: number, list: List<T>) => U,
    thisArg?: any
  ): List<U> {
    const list = new List<U>();

    let i = 0;

    for (const item of this) {
      list.push(callbackfn.call(thisArg, item.data, i++, this));
    }

    return list;
  }

  /**
   * Returns an iterator over the list items.
   */
  public *[Symbol.iterator](): IterableIterator<Item<T>> {
    let current = this.first;

    while (current && current !== this._tail) {
      yield current;
      current = current.next as Item<T>;
    }
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
