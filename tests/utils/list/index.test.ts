import { Binder, Item, List } from '../../../src/utils/list';

describe('Test index.ts', () => {
  it('should export list/Binder class', () => {
    expect(Binder).toBeTruthy();
  });

  it('should export list/Item class', () => {
    expect(Item).toBeTruthy();
  });

  it('should export list/List class', () => {
    expect(List).toBeTruthy();
  });
});
