import React from "react";

function Content(){
    const nameList=["Arpita","Updesh","Ramesh","Shruti"]
  
  const changeName=()=>{
    let index=Math.floor(Math.random()*nameList.length)
    return nameList[index]
  }
    return (
        <main>
        <p>Enjoy Learing  
            <span style={{color:"blue"}}>
            {" "+changeName()}
            </span>
        </p>
        </main>
    )
}
export default Content;