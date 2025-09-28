import { List } from '../../../src/utils/list/List';
import { Item } from '../../../src/utils/list/Item';

describe('Test List class', () => {
  let list: List<string>;

  beforeEach(() => {
    list = new List();
  });

  it('should be truthy', () => {
    expect(list).toBeTruthy();
    expect(list.length).toBe(0);
    expect(list.first).toBeUndefined();
    expect(list.last).toBeUndefined();
    expect([...list].length).toBe(0);
  });

  it('should add a new element at the beginning of the list', () => {
    list.unshift('firstItem1');
    expect(list.length).toBe(1);
    expect(list.first?.data).toBe('firstItem1');

    list.unshift('firstItem2');
    expect(list.length).toBe(2);
    expect(list.first?.data).toBe('firstItem2');

    expect([...list].length).toBe(2);
  });

  it('should add a new element to the end of the list', () => {
    list.push('lastItem1');
    expect(list.length).toBe(1);
    expect(list.last?.data).toBe('lastItem1');

    list.push('lastItem2');
    expect(list.length).toBe(2);
    expect(list.last?.data).toBe('lastItem2');

    expect([...list].length).toBe(2);
  });

  it('should remove the first element of the list', () => {
    expect(list.shift()).toBeUndefined();

    list.unshift('firstItem1');
    const expected = list.unshift('firstItem2');
    expect(list.shift()).toBe(expected);
    expect(list.length).toBe(1);
  });

  it('should remove the last element of the list', () => {
    expect(list.pop()).toBeUndefined();

    list.push('firstItem1');
    const expected = list.push('firstItem2');
    expect(list.pop()).toBe(expected);
    expect(list.length).toBe(1);
  });

  it('should clear the list', () => {
    for (let i = 0; i < 10; ++i) {
      list.unshift(`item${i}`);
    }

    expect(list.length).toBe(10);

    list.clear();
    expect(list.length).toBe(0);
  });

  it('should find the specified element', () => {
    expect(list.find('toFind')).toBeUndefined();

    const item = list.unshift('toFind');
    expect(list.find('toFind')).toBe(item);
    expect(list.contains('notFound')).toBe(false);
  });

  it('should iterate over all items in order with forEach', () => {
    list.push('1');
    list.push('2');
    list.push('4');
    list.push('8');

    let counter = '';

    list.forEach((item, i) => {
      counter += item + i;
    });

    expect(counter).toBe('10214283');
  });

  it('sould iterate over all items in order', () => {
    const elements = ['one', 'two', 'three'];

    elements.forEach(element => list.push(element));

    const items = [...list];

    items.forEach(({ data }, i) => {
      expect(data).toBe(elements[i]);
    });
  });
});
