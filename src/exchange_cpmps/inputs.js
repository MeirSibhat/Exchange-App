import React,{Component} from "react";

class Inputs extends Component{
  render(){
    return(
      <div className="col-lg-6">
        <label>Choose coin:</label>
        <select className="form-control"> 
          <option value="3.42">USD</option>
          <option value="3.87">EURO</option>
        </select>
        <label>Enter amount:</label>
        <input className="form-control" type="number" defaultValue="100"/>
      </div>
    
    )
  }
}

export default Inputs;