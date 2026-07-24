import { PosData } from '../../../data';

export interface PosFormProps {
  d: PosData;
  set: (patch: Partial<PosData>) => void;
}
