import React,{useState, useEffect} from "react";

const Basics = () => {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [copper, setCopper] = useState(0);

     
console.log("Hello")
  useEffect(()=>{
      console.log("Gold: " + gold);
  },[gold])

  
// useEffect(()=>{
//     document.title = "Gold: " + gold + " Silver: " + silver + " Copper: " + copper;
//   },[])




    return(
        <div>
            <h1>Gold: {gold} , Silver: {silver} , Copper: {copper}</h1>
            <button onClick={() => setGold(gold + 1)}>Add Gold</button>
            <button onClick={() => setSilver(silver + 1)}>Add Silver</button>
            <button onClick={() => setCopper(copper + 1)}>Add Copper</button>
        </div>
    )
}

export default Basics;