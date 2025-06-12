import { filterEvenNumbers } from './filter-even-numbers';

test('Even numbers of an messy array', () => {
    const input = [8, 3, 9, 5, 6, 12];
    const expectedOutput = [8, 6, 12];
    expect(filterEvenNumbers(input)).toEqual(expectedOutput);
});
