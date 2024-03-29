import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import RequireAuth from "./pages/Login/RequireAuth";
import ProductDetails from "./pages/Home/ProductDetails";
import DashBoard from "./pages/DashBoard/DashBoard";
import MyProfile from "./pages/DashBoard/MyProfile";
import AddReview from "./pages/DashBoard/AddReview";
import Orders from "./pages/DashBoard/Orders";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/Shared/NotFound";
import MakeAdmin from "./pages/DashBoard/MakeAdmin";
import ManageProduct from "./pages/DashBoard/ManageProduct";
import ManageOrder from "./pages/DashBoard/ManageOrder";
import AddProduct from "./pages/DashBoard/AddProduct";
import Payment from "./pages/DashBoard/Payment";
import RequireAdmin from "./pages/Login/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>

          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
