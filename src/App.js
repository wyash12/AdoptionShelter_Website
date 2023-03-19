import Login from "./components/Login";
import Home from "./components/Homepage"
import Register from "./components/Rejestration"
import About from './components/About'
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
    </Routes>
    
     
    </div>
  );
}

export default App;
