import "./Individual.css";

const Individual = ({prod}) => {
    console.log(prod);
  return (
    <article key={prod.id} className="carta">
        <div>
            <img src={prod.image} alt={`imagen del producto ${prod.id}`}/>
            <h2>{prod.title}</h2>
            <h3>{prod.category}</h3>
        </div>
    </article>
  )
}

export default Individual