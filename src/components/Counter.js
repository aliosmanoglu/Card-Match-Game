import React from 'react'

import { useCard } from "../context/cardContext";
function Counter() {
    //Counting the number of card clicks with the turn Counter state received in the context
    const {turnCounter} = useCard();

  return (
    <div>
      Turn Count :  {turnCounter}
    </div>
  )
}

export default Counter
