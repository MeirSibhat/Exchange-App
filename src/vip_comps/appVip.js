import React, { Component } from "react";
import { vip_ar } from "../data/vipData"
import Vipitem from "./vipitem";

class AppVip extends Component {
  state = { vip: [] }

  // שהקומפ נטען בפעם הראשונה
  componentDidMount() {
    this.setState({ vip: vip_ar })
  }

  render() {
     console.log(vip_ar)
    return (
      <div className="container my-5">
        <div className="row">
          {this.state.vip.map(item => {
            return (
         <Vipitem key={item.name} item={item}/>
            )
          })}

        </div>
        AppVip work
      </div>

    )
  }
}

export default AppVip;