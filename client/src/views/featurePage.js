import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
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
          paddingTop: '0px',
          backgroundColor: 'black',
          paddingBottom: '20px'
        }}
        >

        <AboutProduct />
      </div>
      <Footer />
    </div>
  );
}
}

export default featurePage;
