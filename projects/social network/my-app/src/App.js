/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
