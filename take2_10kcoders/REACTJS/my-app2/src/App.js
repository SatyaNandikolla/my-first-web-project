import logo from './logo.svg';
import './App.css';
import { Krishna, Murali, Sam } from './Murali';
import { Kiran } from './Narendhra';
// import some from './Narendhra';
import Abc from "./Narendhra";


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      <Murali />
      <Krishna />
      <Sam />
      {/* <Narendhra/> */}
      {/* <Ervin/> */}
      {/* {console.log(some)} */}
      <Kiran />
      <Abc />
    </div>
  );
}

export default App;
