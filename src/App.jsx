import CryptoBox from './components/CryptoBox';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="/logo.svg" alt="Easy Crypt" className="logo" />
        <h1>Easy Crypt</h1>
        <p className="subtitle">Cripta e decripta testo in modo semplice e sicuro</p>
      </header>
      <main>
        <CryptoBox />
      </main>
      <footer className="footer">
        <p>Tutto avviene localmente nel tuo browser. Nessun dato viene inviato.</p>
      </footer>
    </div>
  );
}
