
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Login from './Login';
import Register from './Register'
import AddBooks from './AddBooks';
import Logout from './logout';
import Books from './books';

function App() {
  return (
    < >
      <Routes>

<Route exact path='/' element={<Register/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/AddBooks" element={<AddBooks/>}/>
<Route path="/Logout" element={<Logout/>}/>
<Route path="/Books" element={<Books/>}/>
</Routes>
    </>
  );
}

export default App;
