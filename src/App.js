import logo from './assert.network.logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="App-btn" alt="Enter App">
          <a href="https://app.assert.network"><button class="btn ice">Enter App</button></a>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Assert.Network
        </h1>
        <p>
          We have price discovery, now how about some truth discovery?
        </p>
      </header>
    </div>
  );
}

export default App;
