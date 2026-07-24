import { formatBRL } from '../formatBRL';

describe('formatBRL', () => {
  it('should format digits into a BRL currency string', () => {
    expect(formatBRL('5500')).toBe('R$ 55,00');
  });

  it('should add thousands separators', () => {
    expect(formatBRL('123456')).toBe('R$ 1.234,56');
  });

  it('should return an empty string when there are no digits', () => {
    expect(formatBRL('R$ ')).toBe('');
  });
});
