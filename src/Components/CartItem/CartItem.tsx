import './styles.scss'
import {data} from '../../interfaces'
import { v4 as uuidv4 } from 'uuid';
import {BiTrash} from 'react-icons/bi'

const CartItem = ({data}:{data:data}) => {
    console.log(data)
    
  return (
    <div className='cart__item'>
        <img className='cart__item__image' src={data.img}/>
        <div className='cart__item__info'>
          <p className='card__item__name'>{data.name}</p>
          <p className='card__item__name'>{data.price}</p>
          <p>{data.tags.map(el => <span key={uuidv4()}>{el}</span>)}</p>
        </div>
        <div className='cart__item__side'>
          <BiTrash/>
          <p className='card__item__price'>{data.price}</p>
        </div>
        
    </div>
  )
}

export default CartItem