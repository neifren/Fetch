import './App.css';
import { useEffect, useState } from 'react';
import Actividad1 from './Actividad1';

function App() {
  const [datos, setDatos] = useState([]);
  
  useEffect(()=>{
    const url='https://randomuser.me/api/?results=3';
    const peticion=fetch(url);
    peticion
    .then(datos=>datos.json())
    .then(lectura=>{
         lectura.results.map((persona)=>{
          setDatos((e)=>
          [...e, <div key={persona.email}>
            <div>{persona.name.first} {persona.name.last}</div>
            <div>
              <img alt={persona.email} src={persona.picture.large}></img>
            </div>
          </div>
          ])
        })
    })
    .catch(()=>console.log("Se ha producido un error"))
  }, [])

  return (
    <>
    <Actividad1/>
    </>
          
  );
}

export default App;
