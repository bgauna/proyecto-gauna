import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";
import Tarjetas from "../Tarjetas/Tarjetas";
import "./PlataformaDeDatos.css";

const PlataformaDeDatos = () => {
  const [loading, setLoading]=useState(true);
  const [productos, setProductos]=useState([]);
  
  const listaDeProductos=fetch('https://fakestoreapi.com/products')
  
  useEffect( ()=>{
    listaDeProductos
    .then((res)=>{return res.json();})
    .then((response)=>{return setProductos(response);})
    .then((r)=>{setLoading(false);})
    .catch(e=>console.log(e));
  } , [] )

  
    return (
    <main className="">
        <h2>Catalogo de Productos</h2>
        {loading ? <Loading/> : <Tarjetas productos={productos}/>}
    </main>
  )
}

export default PlataformaDeDatos