import './App.css';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Nav />
        <Main appState={props.appState} dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
