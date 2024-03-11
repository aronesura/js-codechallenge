import SettingsSelector from './components/settings/SettingsSelector';
import Modal from 'react-modal';
import ThemeProvider from './theme';

Modal.setAppElement('#root');

function App() {
  return (
    <ThemeProvider>
      <SettingsSelector />
    </ThemeProvider>
  );
}

export default App;
