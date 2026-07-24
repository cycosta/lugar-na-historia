import { buildCards } from '../buildCards';
import { initialState } from '../postTypes';

describe('buildCards', () => {
  it('should build the 5 fixed Pré Passeio cards', () => {
    const data = initialState();
    const cards = buildCards('pre', data);

    expect(cards.map((c) => c.label)).toEqual(['Capa', 'Descrição', 'Itinerário', 'Preços', 'Encerramento']);
    expect(cards.every((c) => c.w === 1080 && c.h === 1350)).toBe(true);
  });

  it('should build one Pós Passeio card per gallery photo plus cover and ending', () => {
    const data = initialState();
    data.pos.gallery = [
      { id: 'g1', photo: null },
      { id: 'g2', photo: null },
    ];
    const cards = buildCards('pos', data);

    expect(cards.map((c) => c.label)).toEqual(['Capa', 'Galeria 1', 'Galeria 2', 'Encerramento']);
  });

  it('should render Reels at 1080x1920 (Instagram Stories/Reels aspect)', () => {
    const data = initialState();
    const cards = buildCards('reels', data);

    expect(cards[0].w).toBe(1080);
    expect(cards[0].h).toBe(1920);
  });
});
