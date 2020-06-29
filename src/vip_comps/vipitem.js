
import React, { Component } from 'react'

export class vipitem extends Component {
    render() {
        let item= this.props.item;
        return (
            <div  className="col-lg-6 border">
            <img src={item.image} className="float-left mr-2 w-25" />
            <h3>{item.name}</h3>
            <div>Money: {item.worth}</div>
          </div>
        )
    }
}

export default vipitem
