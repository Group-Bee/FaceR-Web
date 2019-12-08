import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";

class landingPage extends React.Component {
  state = {
    //boolean to notify if at top of page
    atTop: true
  };
  //event listender components for scrolling
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  //on scroll function - checks to see if the window y pos is <60 and if it is set top variable to true
  //if not set to false
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
            //if at top set opacity to 0 if not opacity 1
            this.state.atTop
              ? {
                  opacity: "0",
                  transition: "opacity 1s"
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
              marginTop: "-60px",
              marginBottom: "-60px"
            }}
          >
            {/*Video frame*/}
            <iframe
              title="productVid"
              width="100%"
              height="100%"
              //src="https://www.youtube.com/embed/1XZZpf6yReg?&rel=0&loop=1&controls=0&autoplay=1" //Animated loop video
              src="https://www.youtube.com/embed/xp30DZNphGE?autoplay=1&showinfo=0&controls=0&loop=1" //August Smart Lock Pro video
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>

          <div>
            <div
              className="jumbotron"
              style={{ position: "relative", zIndex: "1" }}
            >
              <h1 className="display-3">FaceR - Unlock Your Future</h1>
              <p className="lead">
                Explore the secure and exciting world of facial recognition
                locks
              </p>
              <hr className="my-4" />
              <p></p>
              <p className="lead">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://august.com/products/august-smart-lock-pro-connect"
                  role="button"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          {/*insert footer*/}
          <Footer />
        </div>
      </div>
    );
  }
}

export default landingPage;
