import { useState } from "react"
import Loading from "../Loading/Loading";
import Tarjetas from "../Tarjetas/Tarjetas";

const PlataformaDeDatos = () => {
  const [loading, setLoading]=useState(true);
  
    return (
    <div>
        <h2>Catalogo de Productos</h2>
        {loading ? <Loading/> : <Tarjetas/>}
    </div>
  )
}

export default PlataformaDeDatos