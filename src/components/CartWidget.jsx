import "./CartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <>
      <ShoppingCartOutlinedIcon />
      <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">2</span>
      </div>
    </>
  );
};

export default CartWidget;
