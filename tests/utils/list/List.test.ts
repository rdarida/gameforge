import { List } from '../../../src/utils/list/List';

describe('Test List class', () => {
  let list: List<string>;

  beforeEach(() => {
    list = new List();
  });

  it('should be truthy', () => {
    expect(list).toBeTruthy();
    expect(list.length).toBe(0);
    expect(list.getFirst()).toBeUndefined();
  });

  it('should insert a new element to the beginning of the list', () => {
    list.addFirst('item0');
    expect(list.getFirst()?.data).toBe('item0');

    list.addFirst('item1');
    expect(list.getFirst()?.data).toBe('item1');
  });
});
