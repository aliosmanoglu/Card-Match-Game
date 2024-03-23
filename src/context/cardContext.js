import { logDOM } from "@testing-library/react";
import { useContext,createContext,useState, useEffect } from "react";

const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [indexOne, setIndexOne] = useState(null);
    const [indexTwo, setIndexTwo] = useState(null);
    const [turnCounter,setTurnCounter] = useState(0);
    const [isGameOver,setGameOver] = useState(false);
    const [matches,setMatches] = useState([false,false,false,false,false,false,false,false,false,false,false,false])


    const compareCards = (choiceOne,choiceTwo) => {
        if(choiceOne.id === choiceTwo.id){
            const array = [...matches];
            array[indexOne] = true;
            array[indexTwo] = true;
            setMatches(array);
            return true;
        }
        return false;
    }

    useEffect(() => {
        let bool = false;
        for (let i = 0; i < matches.length; i++) {
            if(!matches[i]){
                break;
            }else if (i === matches.length - 1) {
                bool = true;
            }
        }
        if(bool) {
            setGameOver(true)
            console.log("Oyun Bitti");
        }
        console.log(matches);
    },[matches]);
    


    const values = {
        choiceOne,
        setChoiceOne,
        choiceTwo,
        setChoiceTwo,
        matches,
        setMatches,
        compareCards,
        setIndexOne,
        setIndexTwo,
        turnCounter,
        setTurnCounter
    }


    return <CardContext.Provider value={values}>{children}</CardContext.Provider>
}

export const useCard = () => useContext(CardContext);