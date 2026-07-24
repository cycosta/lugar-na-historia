import { validate } from '../validate';
import { initialState } from '../postTypes';

describe('validate', () => {
  it('should require title, date and cover photo for Pré Passeio', () => {
    const data = initialState();
    const { valid, missing } = validate('pre', data);

    expect(valid).toBe(false);
    expect(missing).toEqual(['Título', 'Data do passeio', 'Foto de capa']);
  });

  it('should pass once the required Pré Passeio fields are filled', () => {
    const data = initialState();
    data.pre = { ...data.pre, title: 'Memorial', day: '20', month: 'Agosto', photo: 'data:image/png;base64,abc' };

    expect(validate('pre', data).valid).toBe(true);
  });

  it('should require a background photo for the Agenda "none" variant only', () => {
    const data = initialState();
    data.agenda.items[0] = { date: '20', title: 'Pequena África' };

    expect(validate('agenda', data).valid).toBe(true);

    data.agenda.variant = 'none';
    expect(validate('agenda', data).missing).toContain('Foto de fundo');
  });
});
