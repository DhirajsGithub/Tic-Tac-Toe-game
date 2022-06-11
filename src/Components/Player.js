import React, { useState } from 'react'

const Player = (props) => {

   


   let winning = {
     win1 : ['0,0', '1,1', '2,2'],
     win2 : ['0,0', '1,0', '2,0'],
     win3 : ['0,1', '1,1', '2,1'],
     win4 : ['0,2', '1,2', '2,2'],
     win5 : ['0,0', '0,1', '0,2'],
     win6 : ['1,0', '1,1', '1,2'],
     win7 : ['2,0', '2,1', '2,2'],
     win8 : ['0,2', '1,1', '2,0'],
   }

   for(let key in winning){
    let arr = winning[key];
    let r = arr.every((e)=>{
      return props.playerX.includes(e);
    })
    // console.log(r)
    props.onWinnigX(r);
 }
   for(let key in winning){
    let arr = winning[key];
    let r = arr.every((e)=>{
      return props.playerO.includes(e);
    })
    // console.log(r)
    props.onWinnigO(r);
 }


  return (
    <div>

    </div>
  )
}

export default Player