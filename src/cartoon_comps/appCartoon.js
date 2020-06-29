import React,{Component} from 'react';
import { doApi } from './service/apiSerGet';
import CartoonItem from './cartoonItem';

class AppCartoon extends Component{
  state = {_ar:[]}

  // פועל כמו איניט רק שפועל כאשר הקומפ נטען
  componentDidMount(){
    let url = "https://api.jikan.moe/v3/search/anime?q=dragon&limit=16"
    doApi(url)
    .then(data => {
      console.log(data.results);
      this.setState({_ar:data.results});
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          {this.state._ar.map(item => {
            return(
              <CartoonItem item={item} key={item.mal_id}/>
            )
          })}
        </div>
      </div> 
    )
}
}

export default AppCartoon


//https://api.jikan.moe/v3/search/anime?q=dragon&limit=16