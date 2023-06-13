import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  var [moneyUsuario, setMoneyUsuario] = useState(100)
  var [moneyDiler, setMoneyDiler] = useState(250)
  var [apuestaDiler, setApuestaDiler] = useState("")
  var [moneyInGame, setMoneyInGame] = useState(0)
  var [money, setMoney] = useState(100);
  var [apuesta, setApuesta] = useState('');
  var [numeroGanador, setNumeroGanador] = useState("")
  var [miNumero, setMiNumero] = useState('')

  const handleInputChange = (event) => {
    setApuesta(event.target.value);
  };

  const handleSubmit = (event) => {
    
  if( money === 0){
    alert("lo siento, ya no tienes dinero")
  }else {
    event.preventDefault();
    var apuestaNumber = parseInt(apuesta);
    if (!isNaN(apuestaNumber)) {
      setMoney(money - apuestaNumber);
    }
    setApuesta('');
    apuestaDiler =  apuestaNumber
    console.log(apuestaDiler)
    
moneyDiler = moneyDiler - apuestaNumber
setMoneyDiler(moneyDiler)
apuestaDiler = apuestaNumber
setApuestaDiler(apuestaDiler)
moneyInGame = apuestaNumber + apuestaDiler
setMoneyInGame(moneyInGame)
  }};



  
  var restSubmit = (event) => {
    event.preventDefault();
    var apuestaNumber = parseInt(apuesta);
      setMoney(money + moneyInGame / 2);
    setApuesta('');
    moneyDiler =  moneyDiler + apuestaDiler
    setMoneyDiler(moneyDiler)
      

apuestaDiler = 0
setApuestaDiler(apuestaDiler)
moneyInGame = 0
setMoneyInGame(moneyInGame)
  };
  // useEffect(() => {
  //   const winNumSubmit = () => {
  //     Math.floor(Math.random() * 20)
  //     }
      
  //     setNumeroGanador(winNumSubmit)
      
  // }, [numeroGanador])

useEffect(() => {
  if(miNumero === numeroGanador){
    money = money + moneyInGame
    setMoney(money)
    moneyInGame = 0
    setMoneyInGame(moneyInGame)
alert("ganaste con totalidad de ganancia")
  }else if((miNumero + 1) === numeroGanador  || (miNumero - 1) === numeroGanador){
    money = money + (moneyInGame/2)
    setMoney(money)
   
    moneyDiler = moneyDiler + moneyInGame
    setMoneyDiler(moneyDiler)
    moneyInGame = 0
    setMoneyInGame(moneyInGame)
    alert("estuviste a un punto del primer lugar")
  }
  else if((miNumero + 2) === numeroGanador  || (miNumero - 2) === numeroGanador){
    money = money + (moneyInGame/4)
    setMoney(money)
    moneyDiler = moneyDiler + moneyInGame
    setMoneyDiler(moneyDiler)
  
    moneyInGame = 0
    setMoneyInGame(moneyInGame)
    alert("estuviste a dos puntos del primer lugar")
  }
  else {
   
    moneyDiler = moneyDiler + moneyInGame
    setMoneyDiler(moneyDiler)
    moneyInGame = 0
    setMoneyInGame(moneyInGame)
    alert("perdiste")
  }
}, [miNumero])


useEffect(() => {
if(moneyUsuario === 0){
  alert("Te has quedado sin efectivo")
}
else if(moneyDiler === 0){
  alert("Barriste la casa!")
}
}, [miNumero])
  return (
    <div className="App">
         
      <div className='diler-seccion'>
       
</div>     
      <div className='jugadores-container'>
        <div className='logo-container'>
          <div className='title-container'>
            <h5>Apuestas React!</h5>
          </div>
          <div className='tabla-container'>
<span className='numero-en-juego'>1, </span>
<span className='numero-en-juego'>2, </span>
<span className='numero-en-juego'>3, </span>
<span className='numero-en-juego'>4, </span>
<span className='numero-en-juego'>5, </span>
<span className='numero-en-juego'>6, </span>
<span className='numero-en-juego'>7, </span>
<span className='numero-en-juego'>8, </span>
<span className='numero-en-juego'>9, </span>
<span className='numero-en-juego'>10, </span>
<span className='numero-en-juego'>11, </span>
<span className='numero-en-juego'>12, </span>
<span className='numero-en-juego'>13, </span>
<span className='numero-en-juego'>14, </span>
  <span className='numero-en-juego'>15, </span>
  <span className='numero-en-juego'>16, </span>
  <span className='numero-en-juego'>17, </span>
  <span className='numero-en-juego'>18, </span>
  <span className='numero-en-juego'>19, </span>
  <span className='numero-en-juego'>20</span>
<br></br>
</div>

<button className='boton' onClick={() => {
          setNumeroGanador(Math.floor(Math.random(1)* 20))
        }}>Tirale!</button>
       
       <button className='boton' onClick={() => {
          setMiNumero(Math.floor(Math.random(1)* 20))
        }}>Realizar Apuesta</button><p>tu numero es: {miNumero}</p>

        <img src={logo} className="App-logo" alt="logo" />
        <h2> {numeroGanador}</h2>
        </div>
        <h1><br></br>React Diler: {moneyDiler} </h1>    
     <button className='boton' onClick={() => setMoneyDiler(moneyDiler + 100)}>$</button>
       
        <p>la apuesta es de: {moneyInGame}$</p>  
   


    <div className='gamer-seccion'>
      <h1>Tienes: {money}$</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={apuesta} onChange={handleInputChange} />
        <button className='boton' type="submit" onClick={console.log(apuestaDiler)}>Apostar</button>
      
      </form>
      <form onSubmit={restSubmit}>
      <button className='boton' type='submit'>Retirar Apuesta</button>
      </form>
    </div>

<div className='seleccion-numero'>
<div className='contenedor-seleccion'>
  <div>

<p>{miNumero}</p>
</div>
</div>
</div>
</div>
    </div>
      );
}

export default App;
