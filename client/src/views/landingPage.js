import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";

//changed
class landingPage extends React.Component {
  state = {
    atTop: true
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset <= 60) {
      this.setState({ atTop: true });
    } else {
      this.setState({ atTop: false });
    }
  };
  render() {
    return (
      <div className="App">
        <header
          style={
            this.state.atTop
              ? {
                  opacity: "1",
                  transition: "opacity 1s",
                  opacity: "0"
                }
              : { transition: "opacity 1s", opacity: "1" }
          }
          className="App-header"
          id="nav"
        >
          <Header
            incart={this.props.incart}
            add={this.props.add.bind(this)}
            remove={this.props.remove.bind(this)}
          />
        </header>
        <div
          className="Body"
          style={{
            paddingTop: "0px",
            backgroundColor: "black",
            paddingBottom: "20px"
          }}
        >
          <p
            className="lead"
            style={{
              width: "100%",
              height: "900px",
              position: "relative",
              zIndex: "0",
              marginBottom: "-100px"
            }}
          >
            <iframe
              title="productVid"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1XZZpf6yReg?&rel=0&loop=1&controls=0&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>

          <AboutProduct />
        </div>
        <Footer />
      </div>
    );
  }
}

export default landingPage;
