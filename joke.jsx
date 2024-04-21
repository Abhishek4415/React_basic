import { useEffect, useState } from "react";

export default function Joke(){
    let [joke,setjoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";
    const getjoke=async ()=>{
        let response=await fetch(URL);
        let jsonresponse=await response.json();
        console.log(jsonresponse);
        setjoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
    };

    //useeffect for print value first time;
    useEffect(()=>{
       async function getfirstjoke(){
        let response=await fetch(URL);
        let jsonresponse=await response.json();
        setjoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
    };
    getfirstjoke();

    },[]);
        


    return(
        <div>
            <h2>Get joke</h2>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={getjoke}>NEW JOKE</button>
        </div>
    )

}