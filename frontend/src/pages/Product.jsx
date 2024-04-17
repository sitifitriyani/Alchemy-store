import { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../componens/Cart";
import ProductCard from "../componens/ProductCard";
import ListProduct from "../componens/ListProduct";
import Header from "../componens/Header";
import Footer from "../componens/Footer";

function Product() {
  const [products, setProducts] = useState([]);
  const [countItem, setCountItem] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [notification, setNotification] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchKeyword]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    setCountItem(countItem + 1);
    setCartItems([...cartItems, product]);
  };

  const handleLikeProduct = (product) => {
    setLikedProducts([...likedProducts, product]);
  };

  const handleCartClick = () => {
    setShowCartPopup(!showCartPopup);
  };

  const handleClosePopup = () => {
    setShowCartPopup(false);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filterProducts = () => {
    if (searchKeyword === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <Cart
          countItem={countItem}
          cartItems={cartItems}
          onCartClick={handleCartClick}
          className="absolute right-0 top-full"
        />
        <h1 className="font-serif font-bold size-100px">ALL PRODUCT</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchKeyword}
            onChange={handleSearch}
            className="p-2 m-3 bottom-2 text-black"
          />
        </div>
      </div>
      <div className="container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              onLikeProduct={() => handleLikeProduct(product)}
              showNotification={showNotification}
            />
          </div>
        ))}
      </div>
      {showCartPopup && (
        <ListProduct cartItems={cartItems} onClose={handleClosePopup} />
      )}
      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Product;
