// zip.spec.ts
import { validateZip } from './zip';

describe('validateZip tests', () => {
    it('should return true for a valid zip code', () => {
        const actualResult = validateZip("12345");
        const expectedResult = true;
        expect(actualResult).toBe(expectedResult);
    })

    it('should return false for a zip code with less than 5 digits', () => {
        const actualResult = validateZip("1234");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })

    it('should return false for a zip code with more than 5 digits', () => {
        const actualResult = validateZip("123456");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })

    it('should return false for a zip code with non-numeric characters', () => {
        const actualResult = validateZip("abcde");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })
})
