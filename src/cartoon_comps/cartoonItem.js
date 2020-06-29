import React, { Component } from 'react';

class CartoonItem extends Component {
  render() {
    let { image_url, title, episodes } = this.props.item
    return (
      <div className="col-lg-6 border">
        <img src={image_url} className="w-25 float-right ml-2" />
        <h2>{title}</h2>
        <div>Ep: {episodes}</div>
      </div>
    )
  }
}

export default CartoonItem