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
import { MONTHS, AgendaItemData } from '../../../data';

import { StyledSection, StyledSectionTitle } from '../formStyles';
import {
  StyledItemRow,
  StyledDayField,
  StyledTitleField,
  StyledButtonStack,
} from './AgendaForm.styles';
import { AgendaFormProps } from './AgendaForm.types';

export const AgendaForm = ({ d, set }: AgendaFormProps) => {
  const setItem = (i: number, patch: Partial<AgendaItemData>) => {
    const items = [...d.items];
    items[i] = { ...items[i], ...patch };
    set({ items });
  };
  const addItem = () => {
    if (d.items.length >= 5) return;
    set({ items: [...d.items, { date: '', title: '' }] });
  };
  const removeItem = (i: number) => {
    if (d.items.length <= 1) return;
    set({ items: d.items.filter((_, idx) => idx !== i) });
  };
  const move = (i: number, dir: number) => {
    const j = i + dir;
    if (j < 0 || j >= d.items.length) return;
    const items = [...d.items];
    [items[i], items[j]] = [items[j], items[i]];
    set({ items });
  };

  return (
    <>
      <StyledSection>
        <StyledSectionTitle>Agenda</StyledSectionTitle>
        <Field label="Mês">
          <Select
            value={d.month}
            onChange={(v) => set({ month: v })}
            options={MONTHS}
          />
        </Field>
        <Field label="Forma decorativa">
          <Select
            value={d.variant}
            onChange={(v) => set({ variant: v as 'spike' | 'circle' | 'none' })}
            options={[
              { value: 'spike', label: 'Solar' },
              { value: 'circle', label: 'Círculo' },
              { value: 'none', label: 'Foto' },
            ]}
          />
        </Field>
        {d.variant === 'none' && (
          <Field label="Foto de fundo">
            <PhotoSlot value={d.photo} onChange={(v) => set({ photo: v })} />
          </Field>
        )}
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Itens</StyledSectionTitle>
        {d.items.map((it, i) => (
          <StyledItemRow key={i}>
            <StyledDayField>
              <Field label="Dia">
                <DayInput
                  value={it.date}
                  onChange={(v) => setItem(i, { date: v })}
                />
              </Field>
            </StyledDayField>
            <StyledTitleField>
              <Field label="Passeio">
                <TextInput
                  value={it.title}
                  onChange={(v) => setItem(i, { title: v })}
                  placeholder="Pequena África"
                />
              </Field>
            </StyledTitleField>
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
                disabled={i === d.items.length - 1}
              >
                <Icon type={IconType.ARROW_DOWN} />
              </IconButton>
            </StyledButtonStack>
            <IconButton
              onClick={() => removeItem(i)}
              title="Remover"
              disabled={d.items.length <= 1}
            >
              <Icon type={IconType.TRASH} />
            </IconButton>
          </StyledItemRow>
        ))}
        <AddButton onClick={addItem} disabled={d.items.length >= 5}>
          Adicionar item
        </AddButton>
      </StyledSection>
    </>
  );
};
