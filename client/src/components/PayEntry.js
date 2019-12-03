import React, { Component } from 'react'
import data from '../data/locks.data'
import data2 from '../data/locks.data'
let axios = require('axios')


// axios.get('/About/Locks').then(function(response){
//   console.log('axios from within pay entry ', response.data)
//   data = response.data
//   const entries2=  data.map(element => {
//     return (
//       <div className="test" style={{ textAlign: 'left', height: '400px' }} key={element.id}>
//         <p>Store item to buy here</p>
//         <img src={element.image} width={300} height={300}></img>
//         <h3 style={{ color: 'white', float: 'left', zIndex: '100' }}>{element.price}</h3><p align="center" style={{ transform: 'translateY(-400%)' }}>{element.description}</p>
//         <button type="button" className="btn btn-primary" style={{ float: 'right', transform: 'translateY(-500%)' }} onClick={this.props.add.bind(this, element)}>
//           Add to Cart
//         </button>
//         <br></br>
//       </div>
//     )
//   })
//   console.log("entries 2 is ", entries2)
// }).catch(function (error) {
//   // handle error
//   console.log('error occured in get message sent to /About/Locks')
//   console.log(error);
// });

class PayEntry extends React.Component {

  constructor(){
    super()
    this.state = {
      mongolocks: []
    }
  }

  componentDidMount(){
    console.log('payentry did mount')
    var self = this
    axios.get('/About/Locks').then(function(response){
      // console.log('axios from within pay entry ', response.data)
      self.setState({mongolocks: response.data });
    }).catch(function (error) {
      console.log("error occurred when getting from /About/Locks")
      console.log(error);
    });
  }
  render() {
    console.log('rendering pay entries', data)
    console.log('getting locks', this.state.mongolocks)

    const entries2=  this.state.mongolocks.map(element => {
      return (
        <div className="test" style={{ textAlign: 'left', height: '400px' }} key={element.id}>
          <p>Store item to buy here</p>
          <img src={element.image} width={300} height={300}></img>
          <h3 style={{ color: 'white', float: 'left', zIndex: '100' }}>{element.price}</h3><p align="center" style={{ transform: 'translateY(-400%)' }}>{element.description}</p>
          <button type="button" className="btn btn-primary" style={{ float: 'right', transform: 'translateY(-500%)' }} onClick={this.props.add.bind(this, element)}>
            Add to Cart
          </button>
          <br></br>
        </div>
      )
    })

    const entries = data.map(element => {
      return (
        <div className="test" style={{ textAlign: 'left', height: '400px' }} key={element.id}>
          <p>Store item to buy here</p>
          <img src={element.image} width={300} height={300}></img>
          <h3 style={{ color: 'white', float: 'left', zIndex: '100' }}>{element.price}</h3><p align="center" style={{ transform: 'translateY(-400%)' }}>{element.description}</p>
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
