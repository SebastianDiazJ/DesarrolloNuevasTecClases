import React , {useState} from "react";
//hook useState
const Contador =()=>{
 const [cuenta,setCuenta] = useState(0);
 const [edad,setEdad]= useState(10);
 return (
    <div>
        <p> Presionaste el boton {cuenta} veces </p>
        <button onClick={()=>setCuenta(cuenta+1 )}> Click Me </button>

        <p> tu edad  {edad} años </p>
        <button onClick={()=>setEdad(edad+1 )}> Click Me </button>
    </div>
    
 )
}
export default Contador;