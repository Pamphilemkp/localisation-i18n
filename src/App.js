import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();


  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />

        <p>
        {t('edit_word.edit1')} <code>src/App.js</code> {t('edit_word.edit2')}.
        </p>
        <p>
        {t('learn')}
        </p>
      </header>
    </div>
  );
}

export default App;
