import {
  Field,
  TextInput,
  TextArea,
  Select,
  PhotoSlot,
  MoneyInput,
  DayInput,
  IconButton,
  AddButton,
  Icon,
} from '../../../components';
import { IconType } from '../../../components/Icon/Icon.types';
import { MONTHS } from '../../../data';

import {
  StyledSection,
  StyledSectionTitle,
  StyledRow,
  StyledItemRow,
} from '../formStyles';
import { PreFormProps } from './PreForm.types';

export const PreForm = ({ d, set }: PreFormProps) => {
  const setStop = (i: number, val: string) => {
    const stops = [...d.stops];
    stops[i] = val;
    set({ stops });
  };
  const addStop = () => {
    if (d.stops.length >= 6) return;
    set({ stops: [...d.stops, ''] });
  };
  const removeStop = (i: number) => {
    if (d.stops.length <= 2) return;
    set({ stops: d.stops.filter((_, idx) => idx !== i) });
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
        <Field label="Imagem de capa">
          <PhotoSlot value={d.photo} onChange={(v) => set({ photo: v })} />
        </Field>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Descrição</StyledSectionTitle>
        <Field label="Texto">
          <TextArea
            value={d.description}
            onChange={(v) => set({ description: v })}
            placeholder="Histórias de vítimas dos horrores da Segunda Guerra Mundial."
          />
        </Field>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Itinerário</StyledSectionTitle>
        {d.stops.map((s, i) => (
          <StyledItemRow key={i}>
            <div style={{ flex: 1 }}>
              <TextInput
                value={s}
                onChange={(v) => setStop(i, v)}
                placeholder={`Parada ${i + 1}`}
              />
            </div>
            <IconButton
              onClick={() => removeStop(i)}
              title="Remover"
              disabled={d.stops.length <= 2}
            >
              <Icon type={IconType.TRASH} />
            </IconButton>
          </StyledItemRow>
        ))}
        <AddButton onClick={addStop} disabled={d.stops.length >= 6}>
          Adicionar parada
        </AddButton>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Preço</StyledSectionTitle>
        <Field label="Valor">
          <MoneyInput value={d.price} onChange={(v) => set({ price: v })} />
        </Field>
      </StyledSection>
    </>
  );
};
