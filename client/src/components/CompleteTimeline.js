import React, { Component } from 'react';
import Timeline from "./Timeline"
import TimelineItem from "./TimelineItem"
import Axios from "axios";
import "../App.css";


class CompleteTimeline extends Component {
  constructor(){
    super()
    this.state = {
      mongotimeline: []
    }
  }
  componentDidMount(){
    console.log('Timeline did mount')
    var self = this
    Axios.get('/About/Timeline').then(function(response){
      self.setState({mongotimeline: response.data});
    }).catch(function(error){
      console.log("Error occurred when getting from /About/Timeline")
      console.log(error);
    });
  }
  render(){
    console.log('getting timeline', this.state.mongotimeline)

    const entries= this.state.mongotimeline.map(element => {
      return(
        <div class="Timeline">
        <Timeline>
            <TimelineItem
              key={element._id}
              dateText={element.date}
              style={{ color: '#e86971' }}
              // dateInnerStyle={{ background: '#76bb7f' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }} >
              <h3>{element.title}</h3>
              <h4>{element.subtitle}</h4>
              <p>
                {element.description}
              </p>
            </TimelineItem>
        </Timeline>
        </div>
      )
    })
    return (
      <div> {entries} </div>
    )
  }
};

export default CompleteTimeline;