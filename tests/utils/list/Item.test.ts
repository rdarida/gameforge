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

  it('should parse a value and return an Item instance', () => {
    const item = Item.parse('valueToParse');
    expect(item.data).toBe('valueToParse');
    expect(item).toStrictEqual(Item.parse(item));
  });
});
