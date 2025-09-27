import { Binder } from './Binder';

export class Item<T> extends Binder {
  protected _data: T;

  public get data(): T {
    return this._data;
  }

  constructor(data: T) {
    super();

    this._data = data;
  }
}
