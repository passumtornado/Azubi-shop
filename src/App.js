import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
 