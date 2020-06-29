import React,{Component} from "react";
import Inputs from "./inputs";
import Total from "./total";

class AppExchange extends Component{
  render(){
    return(
      <div className="container">
       <h2>App exchange</h2>
       <Inputs />
       <Total />
      </div>
    
    )
  }
}

export default AppExchange;