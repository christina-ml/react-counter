const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }

  increment=()=>{
    
  }

  render(){
    let count = 0;
    return(
      <div>
        <h3>{this.state.count}</h3>
      </div>
    )
  }
}

export default App;