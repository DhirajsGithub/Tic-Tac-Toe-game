import React from 'react'
import classes from './Choose.module.css'

const Choose = (props) => {
  return (
    <div className={classes.backdrop}>
    <h1 className={classes.chooseYou}>Choose You 🖕</h1>
    <div className={classes.modal}>
        <div onClick={props.playerXSelected} className="playerX">
            <h1>playerX</h1>
        </div>
        <div onClick={props.playerOSelected} className="playerO">
            <h1>playerO</h1>
        </div>
    </div>

    </div>
  )
}

export default Choose