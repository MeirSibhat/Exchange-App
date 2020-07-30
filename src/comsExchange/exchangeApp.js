import React, { useEffect, useState } from 'react';
import InputApp from './inputApp'
import Score from './score'
import Header from './header';

function ExchangeApp() {
    const [arrCoins, setarrCoins] = useState(null); /// all coions
    const [Conversion, setarrConversion] = useState(null)  // result exchange
    const [nameCoins, setNameCoins] = useState(null)  // just name coins

    useEffect(() => {
        let url="http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb"
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
        //  console.log(data.quotes)
          let temp_ar=Object.keys(data.quotes)
          setNameCoins(temp_ar)
          setarrCoins(data.quotes)
         // objToArr(data.quotes);
        })
        .catch(err => {
          console.log(err)
        })
    }, [])


    const coinAmount = (coins) => {
        let val = arrCoins["USD" + coins]// get the Exchange Rates
        return val

    }
    const valueExchange = (obj) => {
        let userGet;
        let cointFrom = obj.coinA
        let CointTo = obj.coinB
        if (obj.coinA === "USD") {  //usd-> Foreign exchange
            // אם זה להמיר דולר למטבע מקומי  אז זה דולר כמות הדול כפול המטבע המקומי
            userGet = obj.inputAmount * coinAmount(obj.coinB);
            // cointFrom = obj.coinA //CointTo = obj.coinB
        }
        else if (obj.coinB === "USD") { //Foreign exchange -> USD
            // אם זה המרה של הטבע המקומי לדולר אז זה הכמות חלקה הדולר 
            userGet = obj.inputAmount / coinAmount(obj.coinA)
        }
        else {// Foreign exchange-> Foreign exchange
            userGet = (obj.inputAmount / coinAmount(obj.coinA))*coinAmount(obj.coinB)
        }
       // console.log(userGet);
        userGet=userGet.toFixed(4) // 4 אחרי הנקודה 
        let nf = new Intl.NumberFormat();// הצגת מספר גדול בצורה יפה 
        userGet=  nf.format(userGet);
        obj.inputAmount= nf.format(obj.inputAmount);// הצגת מספר גדול בצורה יפה 
        let val = {
            cointFrom :cointFrom,
            CointTo: CointTo,
            userGet:userGet,
            Amount: obj.inputAmount
        }
        setarrConversion(val)
    }

    return (
        <div className="container">
        <Header/>
            <br />   <br /> 
            <div className="row justify-content-center">
                <div className="col-md-6">
                {nameCoins&&   <InputApp valueExchange={valueExchange} nameCoins={nameCoins} />}
                  
                </div>
                <div className="col-md-6">
                    <Score  Conversion={Conversion}/>
                </div>
            </div>

        </div>
    )
}

export default ExchangeApp
