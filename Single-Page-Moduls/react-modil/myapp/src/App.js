import logo from './logo.svg';
import './App.css';

function App() {
  const headline ="React"
  return (
    <div className="App">
      <header className="App-header">{/* für class begreifen von css */}
      <img src={logo} alt="Logo"/>{/* {logo} hat als Vareabel geruft */}
        <h1 id='color'>React</h1> 
        <h1 id='color'>{headline}</h1> 
        <h2 id='color'>Headline</h2> {/*  am besten nur ein id verwenden*/}
        <p>Lorem ipsum dolor sit amet</p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
