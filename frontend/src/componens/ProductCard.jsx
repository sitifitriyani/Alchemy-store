// ProductCard.jsx
import { ShoppingCart,ThumbsUp ,ThumbsDown} from "lucide-react";
import { useState } from "react";

function ProductCard({ product, onAddToCart, onLikeProduct }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    onLikeProduct();
  };

  return (
    <div>
      <img src={product.image} alt={product.name} className="img" />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <button onClick={handleLike}>{liked ? <ThumbsUp /> : <ThumbsDown />}</button>
      <button onClick={onAddToCart}><ShoppingCart /></button>
    </div>
  );
}

export default ProductCard;
