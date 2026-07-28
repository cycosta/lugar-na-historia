import { SemPasseioProps } from './SemPasseio.types';
import {
  StyledCoverRoot,
  StyledShapeRoot,
  StyledTopRow,
  StyledDescriptionWrap,
  StyledDescription,
  StyledImageWrap,
  StyledImageSlot,
  StyledTitleBlock,
  StyledTitleLineWrap,
  StyledTitleLine,
  StyledSpacer,
  StyledCircle,
  StyledStar,
} from './SemPasseio.styles';

export const SemPasseio = ({
  className,
  style,
  step = 'cover',
  showStar = true,
  showCircle = true,
  showImage = false,
  showDescription = false,
  text1,
  text2,
  text3,
}: SemPasseioProps) => {
  if (step === 'circle') {
    return (
      <StyledShapeRoot className={className} style={style}>
        <StyledSpacer />
        {showCircle && <StyledCircle />}
      </StyledShapeRoot>
    );
  }

  if (step === 'spike') {
    return (
      <StyledShapeRoot className={className} style={style}>
        <StyledSpacer />
        {showStar && (
          <StyledStar viewBox="0 0 1000 1000" fill="none">
            <path
              d="M 500 0 L 517.12 309.786 L 589.278 8.035 L 550.809 315.899 L 675.687 31.883 L 582.864 327.93 L 756.45 70.776 L 612.257 345.492 L 828.969 123.464 L 638.042 368.019 L 890.916 188.255 L 659.389 394.788 L 940.298 263.066 L 675.614 424.939 L 975.528 345.492 L 686.195 457.502 L 995.475 432.883 L 690.791 491.432 L 999.497 522.432 L 689.255 525.636 L 987.464 611.26 L 681.636 559.017 L 959.764 696.513 L 668.179 590.501 L 917.287 775.448 L 649.317 619.076 L 861.397 845.531 L 625.655 643.824 L 793.893 904.508 L 597.955 663.949 L 716.942 950.484 L 567.107 678.805 L 633.018 981.981 L 534.101 687.914 L 544.82 997.987 L 500 690.983 L 455.18 997.987 L 465.899 687.914 L 366.982 981.981 L 432.893 678.805 L 283.058 950.484 L 402.045 663.949 L 206.107 904.508 L 374.345 643.824 L 138.603 845.531 L 350.683 619.076 L 82.713 775.448 L 331.821 590.501 L 40.236 696.513 L 318.364 559.017 L 12.536 611.26 L 310.745 525.636 L 0.503 522.432 L 309.209 491.432 L 4.525 432.883 L 313.805 457.502 L 24.472 345.492 L 324.386 424.939 L 59.702 263.066 L 340.611 394.788 L 109.084 188.255 L 361.958 368.019 L 171.031 123.464 L 387.743 345.492 L 243.55 70.776 L 417.136 327.93 L 324.313 31.883 L 449.191 315.899 L 410.722 8.035 L 482.88 309.786 L 500 0 Z"
              fill="rgb(255,13,13)"
              fillRule="nonzero"
            />
          </StyledStar>
        )}
      </StyledShapeRoot>
    );
  }

  return (
    <StyledCoverRoot className={className} style={style}>
      <StyledTopRow>
        {showDescription && (
          <StyledDescriptionWrap>
            <StyledDescription>
              {text1 ??
                'São João Marcos foi a única cidade no Brasil a ser tombada pelo Iphan e depois destombada e demolida a marretas nos anos 1940 para fornecimento de energia e água à capital.'}
            </StyledDescription>
          </StyledDescriptionWrap>
        )}
        {showImage && (
          <StyledImageWrap>
            <StyledImageSlot data-pg-photo-slot="1" />
          </StyledImageWrap>
        )}
      </StyledTopRow>
      <StyledTitleBlock>
        <StyledTitleLineWrap>
          <StyledTitleLine data-pg-clamp-title="1">
            {text2 ?? 'Você sabia?'}
          </StyledTitleLine>
        </StyledTitleLineWrap>
        <StyledTitleLineWrap>
          <StyledTitleLine data-pg-clamp-title="1">
            {text3 ?? ''}
          </StyledTitleLine>
        </StyledTitleLineWrap>
      </StyledTitleBlock>
    </StyledCoverRoot>
  );
};
