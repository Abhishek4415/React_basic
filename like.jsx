import { useState } from "react";

// export default function Like(){
//     let [color,setColor]=useState("yellow");
//     let styles={height:"15px", width:"15px", border:"1px solid black",backgroundColor:color};
//     return <div style={styles} onClick={()=>setColor("red")}></div>
// }

export default function Like(){
    let [islike,setislike]=useState(false);
    let [liked,setliked]=useState(0);
    let toggle=()=>{
        setislike(!islike)
        // setliked(liked+1);
        setliked(1);
        
        
    }
    return(
        <p onClick={toggle}>
            <p>{islike ? liked : 0}</p>
            {islike ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}

        </p>
    );
}