import { CardBox } from '../../components/posts';
import { usePostGenerator } from '../../context';

import {
  StyledPanel,
  StyledTitle,
  StyledGrid,
  StyledCardFrame,
  StyledCardLabel,
} from './PreviewPanel.styles';

export const PreviewPanel = () => {
  const { cards } = usePostGenerator();

  return (
    <StyledPanel>
      <StyledTitle>Preview</StyledTitle>
      <StyledGrid>
        {cards.map((c, i) => (
          <div key={i}>
            <StyledCardFrame>
              <CardBox card={c} scale={260 / c.w} />
            </StyledCardFrame>
            <StyledCardLabel>{c.label}</StyledCardLabel>
          </div>
        ))}
      </StyledGrid>
    </StyledPanel>
  );
};
