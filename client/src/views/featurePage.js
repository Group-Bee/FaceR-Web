import React from "react";
import Header from "../components/Header";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
import Features from "../components/Features";
import "../App.css";
import "../bootstrap.min.css";

//changed
class featurePage extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header" id="nav">
        <Header  incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)} />
      </header>
      <div
        className="Body"
        style={{
          paddingTop: '60px',
          backgroundColor: 'black',
          paddingBottom: '20px'
        }}
        >
          <Features />

          
        
      </div>
      <Footer />
    </div>
  );
}
}

export default featurePage;
