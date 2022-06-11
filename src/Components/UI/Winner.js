import React from 'react'
import classes from './Choose.module.css'

const Winner = (props) => {
  return (
    <div className={classes.backdrop}>
        <div style={{fontSize: '2rem', textAlign:'center', color:'white', marginTop:'9rem'}}>
            <h1 style={{padding:'4rem'}}> <span style={{color: props.player === 'PlayerX' ? 'blue' : 'red'  }} >{props.player}</span> {props.status}</h1>
            <button onClick={()=>{window.location.reload()}} style={{padding:'2rem 1rem', color:'white'
            }}>Play Again</button>
        </div>
    </div>
  )
}

export default Winner