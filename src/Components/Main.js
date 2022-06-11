import React, { Fragment, useState } from 'react'
import classes from './Main.module.css'
import Player from './Player';
import Choose from './UI/Choose';
import Winner from './UI/Winner';

const Main = () => {

    const [playerX, setPlayerX] = useState([]);
    const [playerO, setPlayerO] = useState([]);

    const [winnerX, setWinnerX] = useState(false);
    const [winnerO, setWinnerO] = useState(false);

    const playerXSelected = ()=>{
        setBg(classes.playerX)
    }
    const playerOSelected = ()=>{
        setBg(classes.playerO)
    }
    
    const [bg, setBg] = useState();

    const [box00, setBox00] = useState('');
    const [box01, setBox01] = useState('');
    const [box02, setBox02] = useState('');
    const [box10, setBox10] = useState('');
    const [box11, setBox11] = useState('');
    const [box12, setBox12] = useState('');
    const [box20, setBox20] = useState('');
    const [box21, setBox21] = useState('');
    const [box22, setBox22] = useState('');
    

    const handleOnClick00 = (event)=>{
        let value = event.target.className.slice(0,3);
        console.log(value)
        

        if(value === '0,0'){
            setBox00(true); 
   
        }if(value === '0,1'){
            setBox01(true)
        }
        if(value === '0,2'){
            setBox02(true)
        }
        if(value === '1,0'){
            setBox10(true)
        }
        if(value === '1,1'){
            setBox11(true)
        }
        if(value === '1,2'){
            setBox12(true)
        }
        if(value === '2,0'){
            setBox20(true)
        }
        if(value === '2,1'){
            setBox21(true)
        }
        if(value === '2,2'){
            setBox22(true)
        }
        if(bg === classes.playerO && (event.target.style.background != "red")){
            event.target.style.background = "blue"
            setBg(classes.playerX)
            setPlayerX((preValue)=>{
                return [...preValue, value]
            })
        }else if(bg === classes.playerX && (event.target.style.background != "blue")){
            event.target.style.background = "red"
            setBg(classes.playerO)
            setPlayerO((preValue)=>{
                return [...preValue, value]
            })
        }

    }
    const winnerCallX = (result)=>{
        if(result){
            setWinnerX(true);
        }
        
    }
    const winnerCallO = (result)=>{
        if(result){
            setWinnerO(true);
        }
        
    }
    

  return (
    <Fragment>
    <div style={{textAlign:'center', marginTop:'2rem'}}>
      {bg === classes.playerO ? <h1>Player <span style={{color:'blue'}}>X</span> Turn</h1>:''}
      {bg === classes.playerX ? <h1>Player <span style={{color:'red'}}>O</span> Turn</h1>:''}
      </div>
    <div className={classes.wrapper}>
    
    {!bg &&<Choose playerXSelected ={playerXSelected} playerOSelected={playerOSelected}/>}

    { winnerX && <Winner player='PlayerX'/> || winnerO && <Winner player='PlayerO' />}
  
        <div className={classes.mainBody}>
            <div className={`${classes.row1} ${classes.row}`}>
                <div  onClick={handleOnClick00}
             className={`${[0,0]} col0 col ${box00 && bg} ${!box00 && classes.hover}`}>                
                               
                </div>
                <div onClick={handleOnClick00}
             className={`${[0,1]} col1 col ${box01 && bg} ${!box01 && classes.hover}`}>                
               
                </div>
                <div onClick={handleOnClick00}
             className={`${[0,2]} col2 col ${box02 && bg} ${!box02 && classes.hover}`}>                
               
                </div>
                    
            </div>
            <div className={`${classes.row2} ${classes.row}`}>
            <div  onClick={handleOnClick00}
             className={`${[1,0]} col0 col ${box10 && bg} ${!box10 && classes.hover}`}>                
                               
                </div>
                <div onClick={handleOnClick00}
             className={`${[1,1]} col1 col ${box11 && bg} ${!box11 && classes.hover}`}>                
               
                </div>
                <div onClick={handleOnClick00}
             className={`${[1,2]} col2 col ${box12 && bg} ${!box12 && classes.hover}`}>                
               
                </div>
                    
            </div>
            <div className={`${classes.row2} ${classes.row}`}>
            <div  onClick={handleOnClick00}
             className={`${[2,0]} col0 col ${box20 && bg} ${!box20 && classes.hover}`}>                
                               
                </div>
                <div onClick={handleOnClick00}
             className={`${[2,1]} col1 col ${box21 && bg} ${!box21 && classes.hover}`}>                
               
                </div>
                <div onClick={handleOnClick00}
             className={`${[2,2]} col2 col ${box22 && bg} ${!box22 && classes.hover}`}>                
               
                </div>
                    
            </div>
           
        </div>
        <Player playerX ={playerX} playerO = {playerO} onWinnigX = {winnerCallX} onWinnigO = {winnerCallO} />
    </div>
    </Fragment>
  )
}

export default Main