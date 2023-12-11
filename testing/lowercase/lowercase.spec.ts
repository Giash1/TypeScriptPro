import { isLowerCase } from './lowercase';

describe('isLowerCase', () => {
    it('should return true if the input contains only lowercase letters', () => {
        expect(isLowerCase('hello')).toEqual(true);
        expect(isLowerCase('world')).toEqual(true);
    });

    it('should return false if the input contains any uppercase letters', () => {
        expect(isLowerCase('Hello')).toEqual(false);
        expect(isLowerCase('World')).toEqual(false);
    });

    it('should return false if the input contains any non-letter characters', () => {
        expect(isLowerCase('hello123')).toEqual(false);
        expect(isLowerCase('world!')).toEqual(false);
    });
});
