import React, { Component } from "react";

//This component renders the cart icon and its dropdown
class Cart extends Component {
  constructor() {
    super();
    //add state variable that determines whether cart dropdown will appear or not
    this.state = {
      showCart: false
    };
  }

  //showCart and hideCart will be called onClick of upside-down carrot icon
  showCart = () => {
    this.setState({
      showCart: true
    });
    //hide cart on next click
    document.addEventListener("click", this.hideCart);
  };

  hideCart = () => {
    this.setState({
      showCart: false
    });
    //show cart on next cart
    document.removeEventListener("click", this.hideCart);
  };

  render() {
    //DEBUG
    function handleToken(token, addresses) {
      console.log({ token, addresses });
    }
    console.log("incart cart.js", this.props.incart.length);

    //dropdown will hold dropdown items
    //this.props passed down from App.js (determined by incart field in json in database)
    let dropdown = this.props.incart.map(element => {
      return (
        <li className="item" style={{ whiteSpace: "nowrap" }}>
          <p
            style={{
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden"
            }}
            className="p-item"
          >
            <span style={{ float: "left" }}>&emsp;&emsp;{element.name}</span>
            &emsp;
            <span style={{ float: "right" }}>
              {element.price}&emsp;
              <button
                onClick={this.props.remove.bind(this, element)}
                style={{
                  backgroundColor: "salmon",
                  borderRadius: "6px",
                  float: "right"
                }}
              >
                Remove
              </button>
            </span>
          </p>
        </li>
      );
    });
    //return cart, upside-down carrot icons, dropdown menu and connect to above functions (show/hideCart)
    return (
      <div>
        <li className="nav-right" style={{ zIndex: "2" }}>
          <div style={{ backgroundColor: "transparent" }}>
            <i
              className="fa fa-shopping-cart fa-2x"
              aria-hidden="true"
              style={{ cursor: "auto" }}
            ></i>
            &nbsp;{" "}
            <button
              style={{ backgroundColor: "transparent", color: "white" }}
              onClick={this.showCart.bind(this)}
            >
              <i className="fa fa-caret-down"></i>
            </button>
          </div>
        </li>
        {this.state.showCart && this.props.incart.length !== 0 ? (
          <div
            className="mydrop"
            style={{
              backgroundColor: "white",
              color: "black",
              position: "absolute",
              zIndex: "100",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px"
            }}
          >
            <ul className="myul" style={{ listStyle: "none" }}>
              {dropdown}
              <li
                className="item"
                style={{
                  textAlign: "center",
                  backgroundColor: "grey",
                  fontFamily: "Times New Roman"
                }}
              >
                <a
                  className="nav-link"
                  href="ConfirmPayment"
                  style={{ color: "white" }}
                >
                  Confirm Payment
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Cart;
