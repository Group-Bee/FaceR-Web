import React, { Component } from "react";
import Stripe from 'react-stripe-checkout'

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
    console.log('render cart')
    function handleToken(token, addresses) {
      console.log({ token, addresses })
    }
    console.log('incart cart.js', this.props.incart.length)

    let dropdown = this.props.incart.map(element =>{
      console.log('element inside cart.js', element)
      return(
              <li className="item"><p style={{textAlign:'center'}} className="p-item"><span style={{float: 'left'}}>{element.name}</span>...... <span style={{float: 'right'}}>{element.price}</span></p></li>
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
              <i className="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>
              &nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i></button>
          </div>
        </li>
        {(this.state.showCart && this.props.incart.length != 0) ?
          (<div className="mydrop" style={{ backgroundColor: 'white', color: 'black', position: 'absolute', zIndex: '100' }}>
            <ul className="myul" style={{ listStyle: 'none' }}>
              {dropdown}
              <li className="item">
                <Stripe
                  stripeKey="pk_test_ANdQ4Fctiutj9s6qvco8YrQT00oZrW6PbQ"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={100}
                  style={{ backgroundcolor: "grey", zIndex: '-2' }}
                  className="stripe"
                />
              </li>
            </ul>
          </div>)
          : (null)
        }</div>
    )
  }
}

export default Cart