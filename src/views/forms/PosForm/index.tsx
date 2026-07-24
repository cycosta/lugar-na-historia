import {
  Field,
  TextInput,
  Select,
  PhotoSlot,
  DayInput,
  IconButton,
  AddButton,
  Icon,
} from '../../../components';
import { IconType } from '../../../components/Icon/Icon.types';
import { MONTHS, GalleryItem } from '../../../data';

import { StyledSection, StyledSectionTitle, StyledRow } from '../formStyles';
import { StyledGalleryRow, StyledButtonStack } from './PosForm.styles';
import { PosFormProps } from './PosForm.types';

export const PosForm = ({ d, set }: PosFormProps) => {
  const setGallery = (i: number, patch: Partial<GalleryItem>) => {
    const g = [...d.gallery];
    g[i] = { ...g[i], ...patch };
    set({ gallery: g });
  };
  const addPhoto = () => {
    if (d.gallery.length >= 18) return;
    set({ gallery: [...d.gallery, { id: 'g' + Date.now(), photo: null }] });
  };
  const duplicatePhoto = (i: number) => {
    if (d.gallery.length >= 18) return;
    const g = [...d.gallery];
    g.splice(i + 1, 0, { ...g[i], id: 'g' + Date.now() });
    set({ gallery: g });
  };
  const removePhoto = (i: number) => {
    if (d.gallery.length <= 1) return;
    set({ gallery: d.gallery.filter((_, idx) => idx !== i) });
  };
  const move = (i: number, dir: number) => {
    const j = i + dir;
    if (j < 0 || j >= d.gallery.length) return;
    const g = [...d.gallery];
    [g[i], g[j]] = [g[j], g[i]];
    set({ gallery: g });
  };

  return (
    <>
      <StyledSection>
        <StyledSectionTitle>Capa</StyledSectionTitle>
        <Field label="Data do passeio">
          <StyledRow>
            <DayInput value={d.day} onChange={(v) => set({ day: v })} />
            <Select
              value={d.month}
              onChange={(v) => set({ month: v })}
              options={MONTHS}
            />
          </StyledRow>
        </Field>
        <Field label="Título">
          <TextInput
            value={d.title}
            onChange={(v) => set({ title: v })}
            placeholder="Memorial Vítimas do Holocausto"
          />
        </Field>
        <Field label="Formato da capa">
          <Select
            value={d.coverShape}
            onChange={(v) => set({ coverShape: v as 'circular' | 'arco' })}
            options={[
              { value: 'circular', label: 'Circular' },
              { value: 'arco', label: 'Arco' },
            ]}
          />
        </Field>
        <Field label="Foto de capa">
          <PhotoSlot
            value={d.coverPhoto}
            onChange={(v) => set({ coverPhoto: v })}
          />
        </Field>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Galeria</StyledSectionTitle>
        {d.gallery.map((g, i) => (
          <StyledGalleryRow key={g.id}>
            <PhotoSlot
              value={g.photo}
              onChange={(v) => setGallery(i, { photo: v })}
            />
            <StyledButtonStack>
              <IconButton
                onClick={() => move(i, -1)}
                title="Mover para cima"
                disabled={i === 0}
              >
                <Icon type={IconType.ARROW_UP} />
              </IconButton>
              <IconButton
                onClick={() => move(i, 1)}
                title="Mover para baixo"
                disabled={i === d.gallery.length - 1}
              >
                <Icon type={IconType.ARROW_DOWN} />
              </IconButton>
            </StyledButtonStack>
            <IconButton onClick={() => duplicatePhoto(i)} title="Duplicar">
              <Icon type={IconType.DUPLICATE} />
            </IconButton>
            <IconButton
              onClick={() => removePhoto(i)}
              title="Remover"
              disabled={d.gallery.length <= 1}
            >
              <Icon type={IconType.TRASH} />
            </IconButton>
          </StyledGalleryRow>
        ))}
        <AddButton onClick={addPhoto} disabled={d.gallery.length >= 18}>
          Adicionar foto
        </AddButton>
      </StyledSection>
    </>
  );
};
