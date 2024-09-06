
import './App.css';
import Meikä from './assets/Meikä.png';
import React,{ useState, useEffect } from "react";

  

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour12: false, 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  return (
    <div className="App">
   
        <header className="App-header">
        <img src={Meikä} alt="Meikä" />
        <h1>Tomi Rämö</h1>
        <p>
        Hello Im a indie game developer from Finland and 
         my first indie game with Unity is currently in development . 
        </p>
        <a href="https://github.com/TomiRam" >Github</a>
        <a href="https://www.linkedin.com/in/tomi-r%C3%A4m%C3%B6-54b925153/" >LinkedIn</a>
        <a href ="https://tomiram.itch.io/">Itchio</a>
        <a href ="https://www.instagram.com/tomstrongsteel/">Instagram</a>
        <a href ="https://www.facebook.com/tomi.a.ramo">Facebook</a>
         <a href ="https://www.freecodecamp.org/Tomram">Freecodecamp</a>
        <a href="mailto:t0m1r4m@gmail.com"> Send an Email to me</a>
        <h2>Current Time:{formattedTime}</h2>
      </header>
     
    </div>
    
  );
}

export default App;
