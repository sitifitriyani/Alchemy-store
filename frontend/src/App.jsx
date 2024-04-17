<<<<<<< HEAD
// frontend-src-app.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Product from './pages/Product';
import PrivateRoute from './componens/PrivateRoute';
=======
import { useState } from "react";
import { createContext } from "react";
import { Link, Outlet } from "react-router-dom";

export const AuthContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> c79317b5d723b2c48839370d279469a20e534702

export default function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />  
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
=======
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <header className="p-4 flex justify-between gap-8 shadow-md">
        <Link to="/" className="font-bold text-xl">
          Getch
        </Link>
        <nav className="flex gap-4">
          <Link to="/">Beranda</Link>
        </nav>
        {isLoggedIn ? (
          <Link className="bg-blue-500" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="bg-blue-500" to="/login">
            Login
          </Link>
        )}
      </header>
      <Outlet />
      <footer className="border-t border-gray-300 p-2 text-center">
        &copy; 2024 Getch
      </footer>
    </AuthContext.Provider>
>>>>>>> c79317b5d723b2c48839370d279469a20e534702
  );
}
