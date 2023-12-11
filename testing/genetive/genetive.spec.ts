import { getGenitive } from './genetive';

describe('getGenitive', () => {
  it('should return the genitive form of the name', () => {
    expect(getGenitive('Jonathan')).toBe("Jonathan's");
    expect(getGenitive('Anna')).toBe("Anna's");
    expect(getGenitive('Claes')).toBe("Claes'");
    expect(getGenitive('Hampus')).toBe("Hampus'");
    expect(getGenitive('Johanna')).toBe("Johanna's");
  });
});
