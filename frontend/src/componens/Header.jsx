<<<<<<< HEAD
import logo from "../../public/image/logo_gucci.png";
import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isScrolled, setIsScrolled] = useState(false);

  console.log('currentUser:', currentUser); // Tampilkan nilai currentUser di konsol

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header flex justify-between items-center px-4 py-2 text-black ${isScrolled ? "bg-gray-800 text-white" : "bg-transparent"}`} style={{ position: "fixed", width: "100%", zIndex: "999" }}>
      <div className="logo">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-15" />
          <h1 className="text-2xl font-serif items-center">GUCCI</h1>
        </Link>
      </div>
      <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/product'>
          <li>Product</li></Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      <div className="md:hidden">
        <label htmlFor="chk1" className="cursor-pointer">
          <AlignJustify />
        </label>
      </div>
=======
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header
      className="flex items-center justify-center w-full h-12 bg-transparent"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <Link to="/" className="font-bold text-xl">
        Getch
      </Link>
>>>>>>> c79317b5d723b2c48839370d279469a20e534702
    </header>
  );
}
