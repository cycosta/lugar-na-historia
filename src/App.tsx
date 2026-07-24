import './index.scss';

import { PostGeneratorProvider } from './context';
import {
  Sidebar,
  PreviewPanel,
  ExportBar,
  OffscreenExportLayer,
} from './views';

import { StyledApp } from './App.styles';

function App() {
  return (
    <PostGeneratorProvider>
      <StyledApp>
        <Sidebar />
        <PreviewPanel />
        <ExportBar />
        <OffscreenExportLayer />
      </StyledApp>
    </PostGeneratorProvider>
  );
}

export default App;
