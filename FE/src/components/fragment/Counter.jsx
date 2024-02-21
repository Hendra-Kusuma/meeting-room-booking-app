import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
   render() {
    return (
        <div className="bg-blue-500 text-white w-fit p-5 x-5 flex justify-center rounded-3xl">
            <h1 className="flex items-center m-5">{this.state.count}</h1>
            <button className="bg-red-500 text-white p-3 rounded-xl" onClick={()=> this.setState({count: this.state.count + 1})}>+</button>
            <button className="bg-blue-700 text-white p-3 rounded-xl" onClick={()=> this.setState({count: this.state.count - 1})}>-</button>
        </div>
    )
   }
}


export default Counter