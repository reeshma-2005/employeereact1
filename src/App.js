import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbarlogin from './components/Navbarlogin';
//import employeeform from './components/employeeform';
import Employee from './components/Employee';
import Employeeform from './components/Employeeform';
function App() {
  return (
     
    // <div>
    //  <BrowserRouter>
    //    <Routes>
    //       <Route path='/'exact element={<todolist/>}/>
          
    //    </Routes>
    //  </BrowserRouter>
    //  </div>
     
    // <div className="App">
       
    //    <Employee/>
       
       
    // </div>
    <div>
      <Navbarlogin/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Employee/>} ></Route>
        <Route path='/newemployee' element={<Employeeform/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;
