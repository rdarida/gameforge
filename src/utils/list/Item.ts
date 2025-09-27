import { Binder } from './Binder';

export class Item<T> extends Binder {
  protected _data: T;

  constructor(data: T) {
    super();

    this._data = data;
  }
}
