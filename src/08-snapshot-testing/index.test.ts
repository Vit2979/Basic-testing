import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const array = ['roots', 'trunk', 'branches'];

    const checkTest = {
      value: 'roots',
      next: {
        value: 'trunk',
        next: {
          value: 'branches',
          next: {
            value: null,
            next: null,
          },
        },
      },
    };
    expect(generateLinkedList(array)).toStrictEqual(checkTest);
  });
  test('should generate linked list from values 2', () => {
    const array = ['head', 'neck', 'body', 'tail'];
    expect(generateLinkedList(array)).toMatchSnapshot();
  });
});
