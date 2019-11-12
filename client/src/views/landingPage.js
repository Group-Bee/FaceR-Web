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
          paddingTop: "100px",
          backgroundColor: "black",
          paddingBottom: "100px"
        }}
      >
        <iframe
          title="productVid"
          width="100%"
          height="780"
          src="https://www.youtube.com/embed/1XZZpf6yReg?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

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
