import React from 'react'
import classes from './Choose.module.css'

const Winner = (props) => {
  return (
    <div className={classes.backdrop}>
        <div style={{fontSize: '2rem', textAlign:'center', color:'white', marginTop:'9rem'}}>
            <h1 style={{padding:'4rem'}}>{props.player} Wins !!!! ASSHOLE🕳</h1>
            <button onClick={()=>{window.location.reload()}} style={{padding:'2rem 1rem', color:'white'
            }}>Play Again</button>
        </div>
    </div>
  )
}

export default Winner