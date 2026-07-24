import { PreData } from '../../../data';

export interface PreFormProps {
  d: PreData;
  set: (patch: Partial<PreData>) => void;
}
