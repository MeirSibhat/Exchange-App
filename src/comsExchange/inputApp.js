import React, { useRef ,useState} from 'react';

function InputApp(props) {
    let inputAmount = useRef(null);
    const [coinA, setcoinA] = useState("USD")
    const [coinB, setcoinB] = useState("USD")

    const choiceA=(e)=>{
        setcoinA(e.target.innerText)
    }
    const choiceB=(e)=>{
        setcoinB(e.target.innerText)
    }
    const swichChanging=()=>{
        let temp=coinA;
        setcoinA(coinB)
        setcoinB(temp)  
    }
    const onExchange=()=>{
        if(inputAmount.current.value>0){
            let obj={
                coinA:coinA,
                coinB:coinB,
                inputAmount:inputAmount.current.value
               }
               props.valueExchange(obj);
        }
        else alert("amount must be bigger from 0 ")
       
    }
     const cutName=(name)=>{  //USDISL=>ISL  for dropDwon
        let newName=name.substring(3, 6);
        return newName
     }
    
    return (
        <div className="container">
            <div className="mainInput">
            <span> Amount:  </span>
                <div className=" text-center">
                <input ref={inputAmount} type="number" className="form-control w-25 myInput m-2" />
                </div>

                <div className="dropdown">
                    <button className="btn btn-outline-primary dropdown-toggle m-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {coinA}
                  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.nameCoins.map(item=>{
                        return  <div  key={item} className="dropdown-item" onClick={choiceA} >{cutName(item)}</div>
                    })}
                    </div>
                </div>
   
                <button  onClick={swichChanging} className="btn btn-outline-dark btn-sm m-2"> swich </button>
         
                <div className="dropdown">
                    <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {coinB}
                  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.nameCoins.map(item=>{
                        return  <div  key={item} className="dropdown-item" onClick={choiceB} >{cutName(item)}</div>
                    })}

                    </div>
                </div>

                <button  onClick={onExchange} className="btn btn-success m-2"> Exchange </button>
            </div>
        </div>
    )
}

export default InputApp
