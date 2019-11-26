import React, { Component } from "react";
import Stripe from "react-stripe-checkout";

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      showCart: false
    }
  }

  showCart = () => {
    this.setState({
      showCart: true
    })
    document.addEventListener('click', this.hideCart)
  }

  hideCart = () => {
    this.setState({
      showCart: false
    })
    document.removeEventListener('click', this.hideCart)
  }

  render() {
    function handleToken(token, addresses) {
      console.log({ token, addresses })
    }
    console.log('incart cart.js', this.props.incart.length)

    let dropdown = this.props.incart.map(element =>{
      return(
              <li className="item" onClick={this.props.remove.bind(this, element)}>
                <p style={{textAlign:'center'}} className="p-item">
                  <span style={{float: 'left'}}>{element.name}</span>
                  &emsp;......&emsp;
                  <span style={{float: 'right'}}>{element.price}</span>
                  </p>
            </li>
      )
    })
    return (
      <div>
        <li className="nav-right" style={{ zIndex: '2' }}>
          <div style={{ backgroundColor: '#1a1a1a' }}>
            <button
              style={{ backgroundColor: '#1a1a1a', color: 'white' }}
              onClick={this.showCart.bind(this)}
            >
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i></button>
          </div>
        </li>
        {(this.state.showCart && this.props.incart.length != 0) ?
          (<div className="mydrop" style={{ backgroundColor: 'white', color: 'black', position: 'absolute', zIndex: '100' }}>
            <ul className="myul" style={{ listStyle: 'none' }}>
              {dropdown}
              <li className="item" style={{textAlign: 'center', backgroundColor: 'grey', fontFamily: 'Times New Roman'}}>
              <a className="nav-link" href="ConfirmPayment" style={{color: "white"}}>
                Confirm Payment
                </a>
              </li>
            </ul>
          </div>)
          : (null)
        }</div>
    )
  }
}

export default Cart;
