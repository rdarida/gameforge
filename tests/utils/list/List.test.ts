import { List } from '../../../src/utils/list/List';

describe('Test List class', () => {
  let list: List;

  beforeEach(() => {
    list = new List();
  });

  it('should be truthy', () => {
    expect(list).toBeTruthy();
  });
});
