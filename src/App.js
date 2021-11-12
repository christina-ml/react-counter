import './App.css';
const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      numInput: '',
    }
  }

  handleIncrement=(num)=>{
    this.setState({
      count: this.state.count +num,
    })
  }

  handleDecrement=(num)=>{
    this.setState({
      count: this.state.count -num,
    })
  }

  resetCounter=()=>{
    this.setState({
      count: 0,
    })
  }

  // For the input field - to type in a number
  handleInput=(event)=>{
    this.setState({
      numInput: event.target.value,
    })
  }

  render(){
    let arr = [ {name: "Christina1"}, {name: "Christina2"} ];
    let newArr = arr.map((obj)=>{
      return obj.name + " ";
    })

    let myEl = <div>Counter App</div>;

    return(
      <div className="counter-container">
        <div className="array-el-examples">
          <h1>{ myEl }</h1>
          <h4>{ newArr }</h4>
        </div>

        <div className="counter">
          <h1>{ this.state.count }</h1>
          <button onClick={()=>this.handleDecrement(10)}>-10</button>
          <button onClick={()=>this.handleDecrement(1)}>-</button>
          <button onClick={()=>this.handleIncrement(1)}>+</button>
          <button onClick={()=>this.handleIncrement(10)}>+10</button>
          <button onClick={()=>this.handleIncrement(Number(this.state.numInput))}>+Custom</button>
          <button onClick={this.resetCounter}>Reset</button>
          <br />
          <input 
            type="number" 
            value={this.state.numInput}
            onInput={this.handleInput}
            placeholder="Please type a number"
          />
        </div>
      </div>
    )
  }
}

export default App;