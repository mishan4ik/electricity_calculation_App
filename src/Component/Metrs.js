import React from "react"
import { useState } from "react"
import "./Metrs.css"

let Metrs = () => {

    let[result,setResult]=useState();
    let[start,setStart]=useState();
    let[end,setEnd]=useState();


    let func = (e) => {

        setStart(start = e.target.value);

    }
    let func1 = (e) => {

        setEnd(end = e.target.value);
    }

    let func2 = () => {

        setResult(result = end - start)
        if(isNaN(result)){

            setResult(result = " . Ви не ввели показники")

        }
    }

    return(

        <div>

               <div className="main">
                
                <div className="blockmentr">

                    <div className="block_title">

                            <h1>Розрахунок використаної електроенергії за місяць</h1>

                    </div>
                    <div className="block_img">

                        <img src="https://st3.depositphotos.com/1007566/32959/v/600/depositphotos_329595048-stock-illustration-light-bulb-pop-art-style.jpg" alt="" />

                    </div>

                    <div className="block_start">

                            <p>Введіть у поле показник який був на початку місяця</p>
                            <input type="text" onInput={func} />

                    </div>

                    <div className="block_end">

                            <p>Введіть у поле  показник який Ви отримали на кінець місяця</p>
                            <input type="text" onInput={func1} />


                    </div>

                    <div className="block_btn">


                            <button onClick={func2}>Розрахувати</button>


                    </div>

                    <div className="block_result">


                        <h2>За місяць Ви використали {result}</h2>


                    </div>


                </div>
                
                </div> 

        </div>


    )




}
export default Metrs;
