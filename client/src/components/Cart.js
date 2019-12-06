import React, { Component } from "react";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false
    };
  }

  showCart = () => {
    this.setState({
      showCart: true
    });
    document.addEventListener("click", this.hideCart);
  };

  hideCart = () => {
    this.setState({
      showCart: false
    });
    document.removeEventListener("click", this.hideCart);
  };

  render() {
    function handleToken(token, addresses) {
      console.log({ token, addresses });
    }
    console.log("incart cart.js", this.props.incart.length);

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
