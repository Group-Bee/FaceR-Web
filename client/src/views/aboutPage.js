import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";

//changed
function aboutPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div
        className="Body"
        style={{
          paddingTop: "100px",
          backgroundColor: "black",
          paddingBottom: "100px"
        }}
      >
        <AboutProduct />
        <TestimonialsCarousel />
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

export default aboutPage;