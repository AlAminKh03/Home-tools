
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import RequireAuth from './pages/Login/RequireAuth';
import ProductDetails from './pages/Home/ProductDetails';
import DashBoard from './pages/DashBoard/DashBoard';
import MyProfile from './pages/DashBoard/MyProfile';
import myOrders from './pages/DashBoard/myOrders';
import AddReview from './pages/DashBoard/AddReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<RequireAuth>
          <ProductDetails></ProductDetails>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>

          <Route path='review' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
