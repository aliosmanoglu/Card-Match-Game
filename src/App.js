
import style from "./css/style.module.css";
import './App.css';
import { useEffect, useState } from "react";

import Card from "./components/Card";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import CardContainer from "./components/CardContainer";
import { CardProvider } from "./context/cardContext";

const cards = [
  { "src" : "../public/images/helmet-1.png", id: 0 , matched : false},
  { "src" : "../public/images/potion-1.png", id: 1 , matched : false},
  { "src" : "../public/images/ring-1.png", id: 2 , matched : false},
  { "src" : "../public/images/scroll-1.png", id: 3 , matched : false},
  { "src" : "../public/images/shield-1.png", id: 4 , matched : false},
  { "src" : "../public/images/sword-1.png", id: 5 , matched : false}
]

function App() {

  const [shuffledArray,setShuffledArray] = useState([]);
  
  //Shuffle Array Function
  function shuffleArray(array) {
    const newArray = [...array]; // Orjinal diziyi kopyala
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  function duplicateAndShuffle(array, repeatCount) {
    const duplicatedArray = array.flatMap(item => Array.from({ length: repeatCount }, () => ({ ...item })));
    return shuffleArray(duplicatedArray);
  }

  useEffect(() => {
    setShuffledArray(duplicateAndShuffle(cards, 2));
  },[])


  return (
    <div className="App">
      <div className="container">
        <CardProvider>
          <header className="my-5">
            <h2 className="mb-3">Match Game</h2>
          </header>

          <CardContainer>
            
            {
              //mapping a randomly shuffled array
              shuffledArray && shuffledArray.map((item,i) => (
                <div className="col-md-3" key={i}><Card card={item} index={i} ></Card></div>
              ))
            }
          </CardContainer>
          <Counter/>
        </CardProvider>
      </div>
    </div>
  );
}

export default App;
