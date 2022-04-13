import React from "react";
import { connect } from "react-redux";
import "../styles/cart.css";
import Delete from "@mui/icons-material/DeleteRounded";
import CreditCard from "@mui/icons-material/CreditCardOutlined";
import gamesActions from "../redux/actions/gamesActions";
import PaypalIcon from "../assets/PaypalIcon";
import Swal from "sweetalert2";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 0 };
  }

  componentDidMount() {
    if (this.props.inShopGames) {
      let iterator = 0;

      this.props.inShopGames.map((game) => {
        iterator += game.price;
      });

      this.setState({ price: iterator });
    }
  }

  componentDidUpdate(props) {
    if (props.inShopGames !== this.props.inShopGames) {
      let iterator = 0;

      this.props.inShopGames.map((game) => {
        iterator += game.price;
      });

      this.setState({ price: iterator });
    }
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-container-child">
          {" "}
          {/* el container blanco */}
          <div className="articles-container">
            {/* el contenedor que tiene w50% */}
            <div className="articles-container-first">
              {/* contenedor que tiene w80% */}
              <h3 className="summary-order">Summary Order</h3>
              <p className="summary-order-p">
                Check your item and select your shipping for better experience
                order item.
              </p>
              <div className="articles-container-child">
                {/* el container grisasio que lleva los juegos con sus precios */}
                {this.props.inShopGames &&
                  this.props.inShopGames.map((game) => (
                    <div key={game._id} className="article-container">
                      <div className="image-name-price">
                        {" "}
                        {/* contenedor de la imagen el precio y nombre */}
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/gamesImages/" +
                            game.src
                          }
                          className="article-img"
                        />
                        <div className="name-price">
                          <h5 className="article-name">{game.gameName}</h5>
                          <p className="article-price">${game.price}</p>
                        </div>
                      </div>
                      <Delete
                        className="delete-article"
                        onClick={() => {
                          {
                            const Toast = Swal.mixin({
                              toast: false,
                              position: "center-end",
                              showConfirmButton: true,
                              showCancelButton: true,
                              timer: 3000,
                              background: "#FFF",
                              iconColor: "rgb(238, 76, 103)",
                              icon: "error",
                              confirmButtonColor: "rgb(221, 46, 113)",
                              timerProgressBar: true,
                              confirmButtonText: "Yes, delete it!",
                              cancelButtonColor: "#d33",

                              didOpen: (toast) => {
                                Toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                Toast.addEventListener(
                                  "mouseleave",
                                  Swal.resumeTimer
                                );
                              },
                            });

                            Toast.fire({
                              title:
                                "Do you want to remove the game from the cart?",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              position: "center",
                              icon: "error",
                              showConfirmButton: true,
                              showCancelButton: true,
                              timer: 3000,
                              background: "#FFF",
                              iconColor: "rgb(238, 76, 103)",
                              confirmButtonColor: "rgb(221, 46, 113)",
                              timerProgressBar: true,
                              cancelButtonColor: "#000",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                this.props.deleteFromShop(game);
                                Swal.fire("Has been removed!", "", "success");
                              }
                            });
                          }
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="articles-container-second">
            {/* width 50% */}
            <div className="articles-container-second-child">
              {/* width 80% */}

              <div className="article-total">
                <h6>Total</h6>
                <h6 className="total">{this.state.price.toFixed(2)}</h6>
              </div>
              <div className="payment-method">
                <div className="CreditCard-container">
                  <div className="CreditCard">
                    <CreditCard />
                  </div>
                  <p>Debit / CreditCard</p>
                </div>
                <div className="CreditCard-container">
                  <div className="Paypal">
                    <PaypalIcon />
                  </div>
                  <p>Paypal</p>
                </div>
              </div>
              <button className="paypal-button-xx"> Save and Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteFromShop: gamesActions.deleteFromShop,
};

const mapStateToProps = (state) => {
  return {
    inShopGames: state.gamesReducer.inShopGames,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
