import { Binder } from './Binder';

export class Item<T> extends Binder {
  protected _data: T;

  /**
   * Gets the data stored in this item.
   */
  public get data(): T {
    return this._data;
  }

  /**
   * Creates a new Item instance with the given data.
   *
   * @param data The data to store in this item.
   */
  constructor(data: T) {
    super();

    this._data = data;
  }

  /**
   * Converts a value or an Item into an Item instance.
   *
   * If the given value is already an Item, it is returned unchanged.
   * Otherwise, a new Item is created to wrap the value.
   *
   * @param value Either a raw value of type K or an Item<K>.
   * @returns An Item<K> instance.
   */
  public static parse<K>(value: K | Item<K>): Item<K> {
    return value instanceof Item ? value : new Item(value);
  }
}
