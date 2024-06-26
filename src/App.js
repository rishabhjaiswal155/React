import logo from './logo.svg';
import './App.css';
import { Rishabh } from './components/Rishabh';
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
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import PersonList from './components/PersonList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCountTwo from './components/HoverCountTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Rishabh/> */}
      {/* <Rishi/>
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
      {/* <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/> */}
      {/* <ConditionalRendering/> */}
      {/* <ListRendering/> */}
      {/* <PersonList/> */}
      {/* <StyleSheet primary={true}/>
      <Inline/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RefDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
<Hero heroName="Batman"></Hero>
</ErrorBoundary>
<ErrorBoundary>
<Hero heroName="SuperMan"></Hero>
</ErrorBoundary>
<ErrorBoundary>
<Hero heroName="Joker"></Hero>
</ErrorBoundary> */}
      {/* <ClickCount name="Rishabh"/>
<HoverCount name="Rishabh"/> */}
      {/* <ClickCounterTwo/>
<HoverCountTwo/>
<User render={(isLoggedIn)=>isLoggedIn ? 'Rishabh': 'Guest' }/> */}
      {/* <Counter>
        {(count,incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </Counter>
      <Counter>
        {(count,incrementCount) => (
        <HoverCountTwo count={count} incrementCount={incrementCount} />)}
        </Counter> */}
        {/* <UserProvider value="Rishabh"> */}
        <ComponentC/>
        {/* </UserProvider> */}
    </div>
  );
}

export default App;
