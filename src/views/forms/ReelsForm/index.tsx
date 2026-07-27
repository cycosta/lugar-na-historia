import { Field, TextInput, PhotoSlot, Toggle } from '../../../components';

import { StyledSection, StyledSectionTitle } from '../formStyles';
import { ReelsFormProps } from './ReelsForm.types';

export const ReelsForm = ({ d, set }: ReelsFormProps) => (
  <StyledSection>
    <StyledSectionTitle>Reels</StyledSectionTitle>
    <Field label="Título">
      <TextInput
        value={d.title}
        onChange={(v) => set({ title: v })}
        placeholder="São João Marcos"
      />
    </Field>
    <Field label="Foto">
      <PhotoSlot
        value={d.photo}
        onChange={(v) => set({ photo: v })}
        w={90}
        h={160}
      />
    </Field>
    <Toggle
      label="Subtítulo"
      checked={d.showSubtitle}
      onChange={(v) => set({ showSubtitle: v })}
    />
    {d.showSubtitle && (
      <Field label="Texto do subtítulo">
        <TextInput
          value={d.subtitle}
          onChange={(v) => set({ subtitle: v })}
          placeholder="Roteiro histórico"
        />
      </Field>
    )}
  </StyledSection>
);
