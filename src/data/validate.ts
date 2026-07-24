import { PostGeneratorData, PostType, ValidationResult } from './types';

export const validate = (
  type: PostType,
  data: PostGeneratorData,
): ValidationResult => {
  const missing: string[] = [];

  if (type === 'pre') {
    const d = data.pre;
    if (!d.title.trim()) missing.push('Título');
    if (!d.day || !d.month) missing.push('Data do passeio');
    if (!d.photo) missing.push('Foto de capa');
  } else if (type === 'pos') {
    const d = data.pos;
    if (!d.title.trim()) missing.push('Título');
    if (!d.coverPhoto) missing.push('Foto de capa');
  } else if (type === 'agenda') {
    const d = data.agenda;
    if (!d.items[0] || !d.items[0].date.trim() || !d.items[0].title.trim())
      missing.push('Item da agenda');
    if (d.variant === 'none' && !d.photo) missing.push('Foto de fundo');
  } else if (type === 'outros') {
    const d = data.outros;
    if (d.variant === 'cover' && !d.title.trim()) missing.push('Título');
  } else if (type === 'reels') {
    const d = data.reels;
    if (!d.title.trim()) missing.push('Título');
    if (!d.photo) missing.push('Foto');
  }

  return { valid: missing.length === 0, missing };
};
