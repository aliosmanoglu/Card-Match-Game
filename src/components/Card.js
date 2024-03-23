import React, { useEffect, useState } from 'react'
import { useCard } from "../context/cardContext";

import style from "../css/style.module.css";

import Cover from "../images/cover.png";
import Helmet from "../images/helmet-1.png";
import Potion from "../images/potion-1.png";
import Ring from "../images/ring-1.png";
import Scroll from "../images/scroll-1.png";
import Shield from "../images/shield-1.png";
import Sword from "../images/sword-1.png";

function Card({card,index}) {
    const [isFlipped,setIsFlipped] = useState(true);

    const {choiceOne,setChoiceOne,choiceTwo,setChoiceTwo,matches,compareCards,setIndexOne,setIndexTwo,setTurnCounter,turnCounter} = useCard();

    //Identify the card picture with card.src
    let src = null;
    switch (card.src) {
      case "../public/images/helmet-1.png":
        src = Helmet
        break;
      case "../public/images/potion-1.png":
        src = Potion
        break;
      case "../public/images/ring-1.png":
        src = Ring
        break;    
      case "../public/images/scroll-1.png":
        src = Scroll
        break;
      case "../public/images/shield-1.png":
        src = Shield
        break;
      case "../public/images/sword-1.png":
        src = Sword
        break;
      default:
        break;
    }
    
    
    
    //If there is a matching this function sets flipped state to true of the card 
    useEffect(() => {
      if(matches[index]){
        setIsFlipped(true);
      }
    },[matches])
     
     //If choiceOne or choiceTwo
    useEffect(() => {
      if(choiceOne && choiceTwo){
        console.log(compareCards(choiceOne,choiceTwo));
      }
      //If the time has run out and choiceOne and choiceTwo are set to null, this function will return false.

      if(choiceOne !== card && choiceTwo !== card) {
        setIsFlipped(false);
      } else {
        setIsFlipped(true);
      }
    },[choiceOne,choiceTwo])



  return (
    <div className={style.card} onClick={() => {

        if(choiceOne === card) {
          setIsFlipped(false);
          setChoiceOne(null)
          setTurnCounter((prev) => prev+1)
        }else if (choiceTwo === card) {
          setIsFlipped(false)
          setChoiceTwo(null)
          setTurnCounter((prev) => prev+1)
        }else {
           if(choiceOne === null){
            setChoiceOne(card);
            setIndexOne(index);
            setTurnCounter((prev) => prev+1)
            console.log("Choice One");
          }else if(choiceTwo === null){ 
            setChoiceTwo(card);
            setIndexTwo(index);
            setTurnCounter((prev) => prev+1)
            console.log("Choice Two");
            setTimeout(() => {            
              setChoiceOne(null);
              setChoiceTwo(null);
            },500)
          } else {
            
          }
        }

       
       console.log(turnCounter);
      }}>
      {
        matches[index] || isFlipped ? <img src={src} alt="" />  : <img src={Cover} alt="" />
      }
    </div>
  )
}

export default Card
