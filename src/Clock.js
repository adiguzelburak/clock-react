import React from 'react'



class Clock extends React.Component{    
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString()
          
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
                <div id="dateDesign">{this.state.date}</div>


            </div>
        )
    }
}
export default Clock;