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
  // Retrieve data from mongodb atlas
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

    /* All the data from the timeline collection on mongodb are recieved
    and used to create a TimelineItem component for each. */
    const entries= this.state.mongotimeline.map(element => {
      return(
        <div>
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
        </div>
      )
    })
    return (
      /* The entries are in a Timeline component, so that the items are
      not seperate. */
      <Timeline> {entries} </Timeline>
    )
  }
};

export default CompleteTimeline;