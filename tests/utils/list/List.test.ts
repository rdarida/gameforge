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

  it('should add a new element at the beginning of the list', () => {
    list.addFirst('firstItem1');
    expect(list.length).toBe(1);
    expect(list.getFirst()?.data).toBe('firstItem1');

    list.addFirst('firstItem2');
    expect(list.length).toBe(2);
    expect(list.getFirst()?.data).toBe('firstItem2');
  });

  it('should add a new element to the end of the list', () => {
    list.addLast('lastItem1');
    expect(list.length).toBe(1);
    expect(list.getLast()?.data).toBe('lastItem1');

    list.addLast('lastItem2');
    expect(list.length).toBe(2);
    expect(list.getLast()?.data).toBe('lastItem2');
  });

  it('should remove the first element of the list', () => {
    expect(list.removeFirst()).toBeUndefined();

    list.addFirst('firstItem1');
    const expected = list.addFirst('firstItem2');
    expect(list.removeFirst()).toBe(expected);
    expect(list.length).toBe(1);
  });

  it('should remove the last element of the list', () => {
    expect(list.removeLast()).toBeUndefined();

    list.addLast('firstItem1');
    const expected = list.addLast('firstItem2');
    expect(list.removeLast()).toBe(expected);
    expect(list.length).toBe(1);
  });

  it('should clear the list', () => {
    for (let i = 0; i < 10; ++i) {
      list.addFirst(`item${i}`);
    }

    expect(list.length).toBe(10);

    list.clear();
    expect(list.length).toBe(0);
  });
});
