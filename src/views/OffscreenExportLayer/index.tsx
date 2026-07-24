import { CardBox } from '../../components/posts';
import { usePostGenerator } from '../../context';

import { StyledLayer, StyledCardWrapper } from './OffscreenExportLayer.styles';

export const OffscreenExportLayer = () => {
  const { cards, type, offscreenRefs } = usePostGenerator();

  return (
    <StyledLayer>
      {cards.map((c, i) => (
        <StyledCardWrapper
          key={type + i}
          ref={(el: HTMLDivElement | null) => (offscreenRefs.current[i] = el)}
        >
          <CardBox card={c} scale={1} />
        </StyledCardWrapper>
      ))}
    </StyledLayer>
  );
};
