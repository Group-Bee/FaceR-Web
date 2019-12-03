import React from "react";
import Header from "../components/Header";
import AboutProduct from "../components/AboutProduct";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline"
import TimelineItem from "../components/TimelineItem"
import FutureLocks from "../components/FutureLocks";
import LearnMore from "../components/LearnMore";
import data from "../data/timelineData";

import "../App.css";
import "../bootstrap.min.css";


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
              dateText={data[0].date}
              style={{ color: '#e86971' }}
              // dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>{data[0].title}</h3>
              <h4>{data[0].subtitle}</h4>
              <p>
                {data[0].description}
              </p>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText={data[1].date}
              style={{ color: '#e86971' }}
              // dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>{data[1].title}</h3>
              <h4>{data[1].subtitle}</h4>
              <p>
                {data[1].description}
              </p>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText={data[2].date}
              style={{ color: '#e86971' }}
              // dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>{data[2].title}</h3>
              <h4>{data[2].subtitle}</h4>
              <p>
                {data[2].description}
              </p>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText={data[3].date}
              style={{ color: '#e86971' }}
              // dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>{data[3].title}</h3>
              <h4>{data[3].subtitle}</h4>
              <p>
                {data[3].description}
              </p>
            </TimelineItem>
          </Timeline>

          <FutureLocks />

        </div >
        <TestimonialsCarousel />

        <LearnMore />
        
      </div>
      <Footer />
    </div>
  );
}
}

export default aboutPage;