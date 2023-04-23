import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Modules from './pages/Modules';
import Instructor from './pages/Instructor';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/modules' element = {<Modules/>}/>
        <Route path='/instructor' element = {<Instructor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
