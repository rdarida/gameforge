import { List } from '../../../src/utils/list/List';

describe('Test List class', () => {
  let list: List<string>;

  beforeEach(() => {
    list = new List();
  });

  it('should be truthy', () => {
    expect(list).toBeTruthy();
  });
});
