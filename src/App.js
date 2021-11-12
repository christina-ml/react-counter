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

    let arr = [ {name: "Gregorio"}, {name: "Kiyomi"} ];
    let newArr = arr.map((obj)=>{
      return obj.name;
    })

    return(
      <div>
        <h2>{ newArr }</h2>
        <h3>{ this.state.count }</h3>

      </div>
    )
  }
}

export default App;