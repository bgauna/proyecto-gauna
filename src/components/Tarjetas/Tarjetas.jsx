import Individual from "../Individual/Individual";
import "./Tarjetas.css"
const Tarjetas = ({productos}) => {
  console.log(productos);
  return (
    <section className="cartas">

      {
        productos.map((elemento) => (
          <Individual prod={elemento}/>
        )
        )
      }



    </section>
  )
}

export default Tarjetas