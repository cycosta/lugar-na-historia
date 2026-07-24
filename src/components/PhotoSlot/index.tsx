import { ChangeEvent, useRef } from 'react';

import { PhotoSlotProps } from './PhotoSlot.types';
import {
  StyledWrapper,
  StyledFileInput,
  StyledPreview,
  StyledPlaceholder,
} from './PhotoSlot.styles';

export const PhotoSlot = ({
  value,
  onChange,
  w = 70,
  h = 90,
}: PhotoSlotProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <StyledWrapper $w={w} $h={h}>
      <StyledFileInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
      />
      {value ? (
        <StyledPreview
          $w={w}
          $h={h}
          $src={value}
          onClick={() => inputRef.current?.click()}
        />
      ) : (
        <StyledPlaceholder
          $w={w}
          $h={h}
          onClick={() => inputRef.current?.click()}
        >
          +
        </StyledPlaceholder>
      )}
    </StyledWrapper>
  );
};
