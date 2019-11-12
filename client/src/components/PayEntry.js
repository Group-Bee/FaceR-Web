import React, {Component} from 'react'

class PayEntry extends React.Component{
    render(){
        return(
            <div className = "test" style={{paddingLeft: '0%', paddingRight: '0%', textAlign: 'left', height: '400px', }}>
                <span>Store item to buy here</span>
                <p align='center'>Lock description</p>
                <img src='images/lock_1.png' width={300} height={300}></img>
                <h3 style={{color:'white', float: 'right'}}>Price</h3>
            </div>
        )
    }
}

export default PayEntry