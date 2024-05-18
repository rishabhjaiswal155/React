import logo from './logo.svg';
import './App.css';
import {Rishabh} from './components/Rishabh';
import Rishi from './components/Rishi';
import Hello from './components/Hello';
import Friends from './components/Friends';
function App() {
  return (
    <div className="App">
      <Rishabh/>
      <Rishi/>
      <Hello/>
      <Friends name="Rishabh" nickname="Rishi">
        <p>Son of Sunita Jaiswal(This is Children props)</p>
      </Friends>
      <Friends name="Vishal" nickname="Vip">
        <p>(This is Children props)</p>
      </Friends>
      <Friends name="Dnyaneshwar" nickname="Mauli">
        <p>(This is Children props)</p>
      </Friends>
 
      </div>
  );
}

export default App;
