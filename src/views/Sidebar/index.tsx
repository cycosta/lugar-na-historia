import { TypePicker } from '../../components';
import { usePostGenerator } from '../../context';
import { PreForm, PosForm, AgendaForm, OutrosForm, ReelsForm } from '../forms';

import { StyledSidebar, StyledTitle } from './Sidebar.styles';

export const Sidebar = () => {
  const { type, setType, data, updateTypeData } = usePostGenerator();

  const renderForm = () => {
    if (type === 'pre')
      return (
        <PreForm d={data.pre} set={(patch) => updateTypeData('pre', patch)} />
      );
    if (type === 'pos')
      return (
        <PosForm d={data.pos} set={(patch) => updateTypeData('pos', patch)} />
      );
    if (type === 'agenda')
      return (
        <AgendaForm
          d={data.agenda}
          set={(patch) => updateTypeData('agenda', patch)}
        />
      );
    if (type === 'outros')
      return (
        <OutrosForm
          d={data.outros}
          set={(patch) => updateTypeData('outros', patch)}
        />
      );
    if (type === 'reels')
      return (
        <ReelsForm
          d={data.reels}
          set={(patch) => updateTypeData('reels', patch)}
        />
      );
    return null;
  };

  return (
    <StyledSidebar>
      <StyledTitle>Escolha o tipo de post</StyledTitle>
      <TypePicker type={type} onChange={setType} />
      {renderForm()}
    </StyledSidebar>
  );
};
