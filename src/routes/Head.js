import { Outlet } from "react-router-dom";
import "../css/Head.css";
import "../css/Head.css";

export const Head = () => {
  const viewCart = () => {
    console.log("You Want To View The Cart? You Can't Handle The Cart!");
  };

  return (
    <div className="header-container">
      <header className="header">
        <img className="site-logo" src="./cruiser_example.jpeg"></img>
        <h1>Welcome to Matts' Finger Flippin Fingerboard Site</h1>
        <img
          onClick={() => viewCart()}
          className="checkout-cart-logo"
          src="./cart-icon.png"
        ></img>
      </header>
      <hr></hr>
      <Outlet />
    </div>
  );
};
