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
    expect(list.getLast()).toBeUndefined();
  });

  it('should insert a new element at the beginning of the list', () => {
    list.addFirst('firstItem1');
    expect(list.length).toBe(1);
    expect(list.getFirst()?.data).toBe('firstItem1');

    list.addFirst('firstItem2');
    expect(list.length).toBe(2);
    expect(list.getFirst()?.data).toBe('firstItem2');
  });

  it('should insert a new element to the end of the list', () => {
    list.addLast('lastItem1');
    expect(list.getLast()?.data).toBe('lastItem1');

    list.addLast('lastItem2');
    expect(list.getLast()?.data).toBe('lastItem2');
  });
});
