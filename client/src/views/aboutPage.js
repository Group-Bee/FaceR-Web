import React from "react";
import Header from "../components/Header";
import AboutProduct from "../components/AboutProduct";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import FutureLocks from "../components/FutureLocks";
import LearnMore from "../components/LearnMore";
import "../App.css";
import "../bootstrap.min.css";

//changed
class aboutPage extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header" id="nav">
        <Header 
        
        
        incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)}
        />
      </header>
      <div
        className="Body"
        style={{
          paddingTop: "80px",
          backgroundColor: "black",
          paddingBottom: "80px"
        }}
      >
        <div className="jumbotron">
          <Timeline>
            <TimelineItem
              key="001"
              dateText="11/6/2019"
              style={{ color: '#e86971' }} >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
              <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="11/6/19"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateComponent={(
                <div
                  style={{
                    display: 'block',
                    float: 'left',
                    padding: '10px',
                    background: 'rgb(150, 150, 150)',
                    color: '#fff',
                  }}
                >
                  11/2008 – 04/2009
                </div>
              )}
            >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="08/2008 – 11/2008"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Title, Company</h3>
              <h4>Subtitle</h4>
              <p>
                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                est.
              </p>
            </TimelineItem>
          </Timeline>

          <FutureLocks />
          
          <TestimonialsCarousel />

          <LearnMore />
        </div >
      </div>
      <Footer />
    </div>
  );
}
}

export default aboutPage;