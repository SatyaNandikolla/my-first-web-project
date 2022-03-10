import './App.css';
import { Employees } from './Functional_Components/Employees';
import { Students } from './Functional_Components/Students';
import { Teja } from './Functional_Components/Teja';

function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      {/* <Murali />
      <Krishna />
      <Sam /> */}
      {/* <Narendhra/> */}
      {/* <Ervin/> */}
      {/* {console.log(some)} */}
      {/* <Kiran />
      <Abc /> */}
      {/* <Harish/>  */}
      {/* <Teja/> */}
      <Students/>
      <Employees/>
    </div>
  );
}

export default App;
