/* import logo from './components/'; */
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ConteinerStarWars from './components/STARWARS/ConteinerStarWars';
 
function App() {
  const [counter, setCounter] =useState (0)
  useEffect (() => {
    console.log ('promesa en Mounting');
  })
  const handleClick = () => {
    console.log('hiciste click');
    setCounter( counter + 1 )
  }


  return (
    <div className='container'>
      <NavBar/>
      <div className='my-5'>
        <strong>CONTADOR: {counter}</strong>
      </div>
      {/* <button onClick={handleClick} className='btn m-5'>-</button> */}
      <button onClick={handleClick} className='btn m-5'>+</button>

      <div>
        <ConteinerStarWars/>
      </div>
    
    </div>



  );
}

export default App;
