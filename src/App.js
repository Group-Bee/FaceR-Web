import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import AboutProduct from "./components/AboutProduct";
import "./App.css";
import "./bootstrap.min.css";

function App() {
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
        <iframe
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
    </div>
  );
}

export default App;
