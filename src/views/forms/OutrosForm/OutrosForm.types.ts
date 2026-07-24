import { OutrosData } from '../../../data';

export interface OutrosFormProps {
  d: OutrosData;
  set: (patch: Partial<OutrosData>) => void;
}
