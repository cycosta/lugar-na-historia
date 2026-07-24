import { slugify } from '../slugify';

describe('slugify', () => {
  it('should lowercase and hyphenate a title', () => {
    expect(slugify('Pré Passeio')).toBe('pre-passeio');
  });

  it('should strip accents and cedillas', () => {
    expect(slugify('Conceição da Barra')).toBe('conceicao-da-barra');
  });

  it('should fall back to "post" for empty input', () => {
    expect(slugify('')).toBe('post');
    expect(slugify(undefined)).toBe('post');
  });
});
