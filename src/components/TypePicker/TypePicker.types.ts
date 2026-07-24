import { PostType } from '../../data';

export interface TypePickerProps {
  type: PostType;
  onChange: (type: PostType) => void;
}
