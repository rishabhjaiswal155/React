import logo from './logo.svg';
import './App.css';
import {Rishabh} from './components/Rishabh';
import Rishi from './components/Rishi';
import Hello from './components/Hello';
import Friends from './components/Friends';
import Friends1 from './components/Friends1';
import Jigri from './components/Jigri';
import Jigri1 from './components/Jigri1';
import Message from './components/Messsage';
import Count from './components/Count';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
function App() {
  return (
    <div className="App">
      {/* <Rishabh/>
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
      <Jigri name="Dnyaneshwar" nickname="Mauli">
        <p>(This is Children props)</p>
        <button>smash</button>
      </Jigri>
      
      <Jigri name="Vishal" nickname="Vip">
        <p>(This is Children props)</p>
        <button>smash</button>
      </Jigri>
 <Message/>
 <Count/>
 <Friends1 name="Dnyaneshwar" nickname="Mauli">
        <p>(This is Children props)</p>
      </Friends1>
      <Jigri1 name="Dnyaneshwar" nickname="Mauli">
        <p>(This is Children props)</p>
        <button>smash</button>
      </Jigri1> */}
      <FunctionClick/>
      <ClassClick/>
      </div>
  );
}

export default App;
