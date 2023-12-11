import { makeHeading } from './heading';


describe('makeHeading', () => {
    it('should return correct heading for level 1', () => {
        const actualResult = makeHeading("Hello", 1);
        const expectedResult = "<h1>Hello</h1>";
        expect(actualResult).toBe(expectedResult);
    });

    it('should return correct heading for level 2', () => {
        const actualResult = makeHeading("Next level", 2);
        const expectedResult = "<h2>Next level</h2>";
        expect(actualResult).toBe(expectedResult);
    });

    it('should throw error for level less than 1', () => {
        expect(() => makeHeading("Hello", 0)).toThrow('Level must be between 1 and 6');
    });

    it('should throw error for level greater than 6', () => {
        expect(() => makeHeading("Hello", 7)).toThrow('Level must be between 1 and 6');
    });
});
