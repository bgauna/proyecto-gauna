import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Loading.css'

const Loading = () => {
  return (
    <div>
      <FontAwesomeIcon icon="fa-solid fa-fan" className="Loading"/>
      <p>Cargando E-commerce</p>
    </div>
  )
}

export default Loading