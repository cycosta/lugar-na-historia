import { usePostGenerator } from '../../context';

import { StyledBar, StyledMissing, StyledButton } from './ExportBar.styles';

export const ExportBar = () => {
  const { validation, exporting, handleExport } = usePostGenerator();
  const enabled = validation.valid && !exporting;

  return (
    <StyledBar>
      {!validation.valid && (
        <StyledMissing>Preencha: {validation.missing.join(', ')}</StyledMissing>
      )}
      <StyledButton
        onClick={handleExport}
        disabled={!enabled}
        $enabled={enabled}
      >
        {exporting ? 'Gerando…' : 'Salvar imagens'}
      </StyledButton>
    </StyledBar>
  );
};
