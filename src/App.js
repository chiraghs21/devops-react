import logo from './logo.svg';
import './App.css';
import SimpleCard from './components/card'

function App() {
  return (
    <div className="Container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="Progress">
        <SimpleCard></SimpleCard>
      </div>
      
    </div>
  );
}

export default App;
