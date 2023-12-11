import { isEmailValid } from "./email";
describe('isEmailValid tests', () => {
    it('should return true for a valid email address', () => {
        const actualResult = isEmailValid("giash@gmail.com");
        const expectedResult = true;
        expect(actualResult).toBe(expectedResult);
    })


    // // passing a valid email address expecting false

    // it('should return true for a valid email address', () => {
    //     const actualResult = isEmailValid("giash@gmail.com");
    //     const expectedResult = false;
    //     expect(actualResult).toBe(expectedResult);
    // })


    it('should return false for an invalid email address', () => {
        const actualResult = isEmailValid("giashgmail.com");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })


})


// to check the test run npx jest
