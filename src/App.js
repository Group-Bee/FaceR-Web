import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import AboutProduct from "./components/AboutProduct";
import "./App.css";
import "./bootstrap.min.css";

//changed
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
        <p style={{ padding: "125px", color: "white" }}>Cool vid</p>
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
