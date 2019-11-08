import React, {Component} from 'react'

class PayEntry extends React.Component{
    render(){
        return(
            <div className = "test" style={{textAlign: 'left', height: '400px'}}>
                <p>Store item to buy here</p>
                <img src="../img/lock.jpg" width={100} height={100}></img>
                <h3 style={{color:'white', float: 'right', zIndex: '100'}}>Price</h3><p>Lock description</p>
            </div>
        )
    }
}

export default PayEntry