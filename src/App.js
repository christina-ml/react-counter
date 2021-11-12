const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
    }
  }

  increment=()=>{
    this.setState({
      count: this.state.count +1,
    })
  }

  render(){
    let count = 0;

    let arr = [ {name: "Gregorio"}, {name: "Kiyomi"} ];
    let newArr = arr.map((obj)=>{
      return obj.name;
    })

    let myEl = <div>This is JSX.</div>;

    return(
      <div>
        <h1>{ myEl }</h1>
        <h2>{ newArr }</h2>
        <h3>{ this.state.count }</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App;