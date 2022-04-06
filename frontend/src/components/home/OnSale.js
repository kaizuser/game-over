import "../../styles/onSale.css";

const OnSale = () => {
  return (
    <div className="onSaleContainer">
      <div className="onSaleTitle">
        <h1> ON SALE </h1>
      </div>
      <div className="onSaleCardsDisplay">
        <div className="onSaleCard">
          <div className="cardImage">{/* <img></img> */}</div>
          <div className="cardInfo">
            <div className="cardName">
                <h1> Monster Hunter: World</h1>
            </div>
            <div className="cardPrice">
              <div className="cardDiscount">
                <h2> -60% </h2>
              </div>
              <div className="prices">
                <h3 className="oldPrice"> $33.00 USD</h3>
                <h3> $3.26 USD</h3>
              </div>
            </div>
            <button className="cardbutton"> ADD TO CART </button>
          </div>
        </div>
        <div className="onSaleCard">
          <div className="cardImage">{/* <img></img> */}</div>
          <div className="cardInfo">
            <div className="cardName">
                <h1> Hades</h1>
            </div>
            <div className="cardPrice">
              <div className="cardDiscount">
                <h2> -10% </h2>
              </div>
              <div className="prices">
                <h3 className="oldPrice"> $25.00 USD</h3>
                <h3> $22.50 USD</h3>
              </div>
            </div>
            <button className="cardbutton"> ADD TO CART </button>
          </div>
        </div>
        <div className="onSaleCard">
          <div className="cardImage">{/* <img></img> */}</div>
          <div className="cardInfo">
            <div className="cardName">
                <h1> Mario Party Superstars</h1>
            </div>
            <div className="cardPrice">
              <div className="cardDiscount">
                <h2> -50% </h2>
              </div>
              <div className="prices">
                <h3 className="oldPrice"> $60.00 USD</h3>
                <h3> $30.00 USD</h3>
              </div>
            </div>
            <button className="cardbutton"> ADD TO CART </button>
          </div>
        </div>
        <div className="onSaleCard">
          <div className="cardImage">{/* <img></img> */}</div>
          <div className="cardInfo">
            <div className="cardName">
                <h1> Mortal Kombat 11</h1>
            </div>
            <div className="cardPrice">
              <div className="cardDiscount">
                <h2> -90% </h2>
              </div>
              <div className="prices">
                <h3 className="oldPrice"> $49.99 USD</h3>
                <h3> $5.99 USD</h3>
              </div>
            </div>
            <button className="cardbutton"> ADD TO CART </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSale;
