import {
  Field,
  TextInput,
  TextArea,
  Select,
  PhotoSlot,
  Toggle,
} from '../../../components';

import { StyledSection, StyledSectionTitle } from '../formStyles';
import { OutrosFormProps } from './OutrosForm.types';

export const OutrosForm = ({ d, set }: OutrosFormProps) => {
  const toggleImage = (v: boolean) =>
    set({ showImage: v, showDescription: v ? false : d.showDescription });
  const toggleDescription = (v: boolean) =>
    set({ showDescription: v, showImage: v ? false : d.showImage });

  return (
    <StyledSection>
      <StyledSectionTitle>Outros Conteúdos</StyledSectionTitle>
      <Field label="Forma">
        <Select
          value={d.variant}
          onChange={(v) => set({ variant: v as 'cover' | 'circle' | 'spike' })}
          options={[
            { value: 'cover', label: 'Capa' },
            { value: 'circle', label: 'Círculo' },
            { value: 'spike', label: 'Solar' },
          ]}
        />
      </Field>
      {d.variant === 'cover' ? (
        <>
          <Field label="Título">
            <TextInput
              value={d.title}
              onChange={(v) => set({ title: v })}
              placeholder="Você sabia?"
            />
          </Field>
          <Toggle label="Imagem" checked={d.showImage} onChange={toggleImage} />
          {d.showImage && (
            <Field label="Foto">
              <PhotoSlot value={d.photo} onChange={(v) => set({ photo: v })} />
            </Field>
          )}
          <Toggle
            label="Descrição"
            checked={d.showDescription}
            onChange={toggleDescription}
          />
          {d.showDescription && (
            <Field label="Texto">
              <TextArea
                value={d.description}
                onChange={(v) => set({ description: v })}
                placeholder="São João Marcos foi a única cidade no Brasil a ser tombada pelo Iphan e depois destombada e demolida a marretas nos anos 1940 para fornecimento de energia e água à capital."
              />
            </Field>
          )}
        </>
      ) : (
        <Field label="Descrição">
          <TextArea
            value={d.description}
            onChange={(v) => set({ description: v })}
            placeholder="São João Marcos foi a única cidade no Brasil a ser tombada pelo Iphan e depois destombada e demolida a marretas nos anos 1940 para fornecimento de energia e água à capital."
          />
        </Field>
      )}
    </StyledSection>
  );
};
