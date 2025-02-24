import '../Styles/Components/Cart.scss'

const CartItem = () => {
  return (
    <article className='cart__item'>
        <p className='item__title'>Bryggkaffe</p>
        <p className='item__price'>49 kr</p>
    </article>
  )
}

export default CartItem