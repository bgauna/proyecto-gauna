import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" size="2x" className="CartWidgetIcon" />
      <div className="ValorCarrito">4</div>
    </div>
  )
}

export default CartWidget