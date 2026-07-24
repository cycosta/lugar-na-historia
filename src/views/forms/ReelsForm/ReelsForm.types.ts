import { ReelsData } from '../../../data';

export interface ReelsFormProps {
  d: ReelsData;
  set: (patch: Partial<ReelsData>) => void;
}
