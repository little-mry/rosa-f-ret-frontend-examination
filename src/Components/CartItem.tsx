import '../Styles/Components/Cart.scss'
import addIcom from '../assets/'

const CartItem = () => {
  return (
    <article className='cart__item'>
        <p className='item__title'>Bryggkaffe</p>
        <div className='cart__dotted-line'></div>
            <img src="" alt="" />
        <p className='item__price'>49 kr</p>
    </article>
  )
}

export default CartItem