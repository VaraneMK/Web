import './App.css';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Nav />
        <Main state={props.state} />
      </div>
    </BrowserRouter>
  );
}

export default App;
