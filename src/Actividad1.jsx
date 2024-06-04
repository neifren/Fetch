import React from 'react';
import { useEffect, useState } from 'react';

function Actividad1(){
    const url='https://api.chucknorris.io/jokes/random';
    const peticion = fetch(url);
    peticion.then(console.log("Bien"))
    peticion.catch(console.log("MAL"))
}


export default Actividad1;