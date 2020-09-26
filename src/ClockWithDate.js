import React from 'react'

class ClockWithDate extends React.Component{    
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString(),
         
          
        }; 
        
    }   
    currentTime() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
      }
    
      componentWillMount() {
        setInterval(() => this.currentTime(), 1000);
      }
    render() {
        return (
            <div id="clockDesign">
                <p className="App-clock">
                {this.state.time}
                </p>
                


            </div>
        )
    }
}
export default ClockWithDate;