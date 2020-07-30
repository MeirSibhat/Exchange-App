import React from 'react'

function Score(props) {

const dateExchange=()=>{
   let d=new Date()
    console.log(d.toLocaleDateString())
   return d.toLocaleDateString()
}
    return (
        <div className="container">
            <div className="mainScore">
                {props.Conversion ?
                    <div className="Score">
                     <div className="text-primary text-monospace"><ins>{props.Conversion.cointFrom} To {props.Conversion.CointTo}</ins> </div>
                        <div>
                             
                            <div className="m-2 text-info"> the  amount is  <span className="time text-success"> {props.Conversion.Amount}  </span>{props.Conversion.cointFrom}  </div>
                            <div className="m-2 text-info"> you will get  <span className="time text-danger"> {props.Conversion.userGet}</span> {props.Conversion.CointTo}</div>
                            <div className="time text-dark"> {new Date().toLocaleDateString()}</div>
                        </div>
                    </div> :<div className="noResult">To see a result you need to do an exchange</div>}
            </div>
        </div>
    )
}

export default Score
