import { AgendaData } from '../../../data';

export interface AgendaFormProps {
  d: AgendaData;
  set: (patch: Partial<AgendaData>) => void;
}
