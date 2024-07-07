import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Women from './pages/women/Women';
import Men from './pages/men/Men';
import Blog from './pages/blog/Blog';
import Contactus from './pages/contactus/Contactus';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState";
import Login from './pages/registration/Login';
import SignUp from './pages/registration/SignUp';
import ForgetPass from './pages/registration/ForgetPass';
import Policy from './pages/policy/Policy';
// import Filter from './components/filter/Filter';
function App() {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpass" element={<ForgetPass />} />
            <Route path="/policy" element={<Policy/>} />
            {/* <Route path ="/filter" element={<Filter />} /> */}
          </Routes>
        </Router>
      </MyState>
    </div>
  );
}

export default App
