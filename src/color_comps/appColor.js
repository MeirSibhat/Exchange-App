
import React,{Component} from "react";

class AppColor extends Component{
state={fontColor:"pink"};
changeFontColor = (_color) => {
//e.target.name
    this.setState({fontColor:_color})
  }

  render(){
    return(
      <div className="container text-center">
        <div>
          <h2 style={{color:this.state.fontColor}}>
            {this.props.h2Text}
          </h2>
          <div className="mt-4">
            <button onClick={()=>{this.changeFontColor("Red")}} name="Red" >Red</button>
            <button onClick={()=>{this.changeFontColor("Blue")}} >Blue</button>
            <button onClick={()=>{this.changeFontColor("Orange")}} >Orange</button>
          </div>
        </div>
        AppColor work
      </div>
    
    )
  }
}

export default AppColor;
