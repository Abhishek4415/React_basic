import { useState } from "react";

export default function Comments(){

    let [Formdata,setFormdata]=useState({
        username:"",
        remark:"",
        rating:"3"
    });

   let handleinputchange =(event)=>{
    let fieldname=event.target.name;
    let newvalue=event.target.value;
    //console.log(newvalue);
    setFormdata((currdata)=>{
        return {...currdata,[fieldname]:newvalue}
    })


   };

   function handelsubmit(event){
    event.preventDefault();
    console.log(Formdata);
    setFormdata({
        username:"",
        remark:"",
        rating:""

    })

   }

   


    return (
        <form onSubmit={handelsubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" 
            placeholder="enter your username"  
            value={Formdata.username} 
            onChange={handleinputchange}
            name="username" 
            id="username"
            />
            <br /><br />
            <label htmlFor="password">Remark:</label>
            <textarea type="text" 
            placeholder="enter your username"  
            value={Formdata.remark} 
            onChange={handleinputchange}
            name="remark"
            id="password" 
            />
            <br /><br />
            <label htmlFor="rating">Rating:</label>
            <input type="range" 
            min="0"
            max="5"   step={0.5} //step="0.5" also
            placeholder="enter your username"  
            value={Formdata.rating} 
            onChange={handleinputchange}
            name="rating" 
            id="rating"
            />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    );
};