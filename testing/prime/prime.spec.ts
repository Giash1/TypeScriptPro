import { isPrime } from './prime';

describe('isPrime', () => {
  it('should return false for 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('should return true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return true for other prime numbers', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });

  it('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });
});
