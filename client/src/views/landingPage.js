import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";

//changed
function landingPage() {
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
          <p className="lead" style={{width: '100%', height: '900px', position: 'relative', zIndex: '0', marginBottom: '-100px'}}>
            <iframe
            title="productVid"
            width= '100%'
            height= '100%'
            src="https://www.youtube.com/embed/1XZZpf6yReg?&rel=0&loop=1&controls=0&autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
          </p>

        <AboutProduct />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <Card />
              </th>
              <th scope="col">
                <Card />
              </th>
              <th scope="col">
                <Card />
              </th>
              <th scope="col">
                <Card />
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default landingPage;
