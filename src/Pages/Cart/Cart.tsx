import './styles.scss'
import CartItem from '../../Components/CartItem/CartItem'
import {data} from '../../interfaces'

const Cart = () => {

  const imgUrl = new URL('../../static/album.jpg', import.meta.url).href
  
  const MOCK_DATA:data[] = [{
    id:0,
    name: 'Title',
    img: imgUrl,
    price: 19.99,
    tags: ['HipHop','Rap'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.',

  }]

  return (
    <div className='cart'>
      <div className='cart__items'>
        <p className='cart__title'>Cart</p>
        <CartItem data={MOCK_DATA[0]}/>
        <CartItem data={MOCK_DATA[0]}/>

      </div>
      <div className='cart__pay'>
        Pay
      </div>
    </div>
  )
}

export default Cart