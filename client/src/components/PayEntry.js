import React, { Component } from 'react'
let axios = require('axios')

//This component will return a set of div elements that contain information about available locks
class PayEntry extends React.Component {

  constructor(){
    super()
    //locks will be state array that will be filled out when component mounts
    this.state = {
      mongolocks: []

    }
  }

  componentDidMount(){
    //DEBUG
    console.log('payentry did mount')
    var self = this
    //use axios to send a get request that will ultimately end with a response containing a data field that is equal to our array of mongolocks
    axios.get('/Pay/Locks').then(function(response){
      //set state equal to json holding info about locks that was returned by controller
      self.setState({mongolocks: response.data });
    }).catch(function (error) {
      //DEBUG/error handling
      console.log("error occurred when getting from /About/Locks")
      console.log(error);
    });
  }
  render() {
    //DEBUG
    console.log('getting locks', this.state.mongolocks)

    //entries2 will be lock items in format they are going to be rendered in
    const entries2=  this.state.mongolocks.map(element => {
      return (
        <div className="test" style={{ textAlign: 'left', height: '400px' }} key={element.id}>
          <p>Store item to buy here</p>
          <img src={element.image} width={300} height={300} alt=''></img>
          <h3 style={{ color: 'white', float: 'left', zIndex: '100' }}>$ {element.price}</h3><p align="center" style={{ transform: 'translateY(-400%)' }}>{element.description}</p>
          <button type="button" className="btn btn-primary" style={{ float: 'right', transform: 'translateY(-500%)' }} onClick={this.props.add.bind(this, element)}>
            Add to Cart
          </button>
          <br></br>
        </div>
      )
    })

    return (
      <div>{entries2}</div>
    )
  }
}

export default PayEntry
