import { Item } from '../../../src/utils/list/Item';

describe('Test Item class', () => {
  let item: Item<string>;

  beforeEach(() => {
    item = new Item<string>('data');
  });

  it('should be truthy', () => {
    expect(item).toBeTruthy();
    expect(item.data).toBe('data');
    expect(item.prev).toBe(item);
    expect(item.next).toBe(item);
  });
});
