import React, { useEffect, useState } from 'react'


import { useCard } from "../context/cardContext";
function Timer() {
    const [time,setTime] = useState(0);
    
    const { isGameOver } = useCard();
    let timer = null;

    useEffect(() => {

        timer = setInterval(() => {
            setTime((prev) => prev +1);
        },1000)
      

        if(isGameOver) {
            clearInterval(timer);
        }

        return () => clearInterval(timer)

    },[isGameOver])
   

  return (
    <div onClick={() => clearInterval(timer)}>
      {time}
    </div>
  )
}

export default Timer
