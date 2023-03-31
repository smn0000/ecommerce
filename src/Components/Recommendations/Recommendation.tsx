import React from 'react'
import './styles.scss'


const Recommendation = ({isRight}:{isRight:Boolean}) => {
    const img = new URL('../../static/album.jpg',import.meta.url).href


    

  return (
    <div className='recommendation'>
        {!isRight && <img src={img} alt="" />}
        <div className='recommendation__info'>
          <div className='recommendation__top'>
            <p className='recommendation__title'>Title</p>
            <p className={`recommendation__text ${isRight && 'right'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.</p>
          </div>

          <div className='recommendation__bottom'>
            
            <div className='recommendation__buy'>
              <span className='buy__price'>19.99$</span>
              <button className='buy__add '>Add to cart</button>
            </div>
    
            <div className='recommendation__tags'>
              <p>HipHop</p>
              <p>Rap</p>
            </div>
          </div>
        </div>
        {isRight && <img src={img} alt="" />}
    </div>
  )
}

export default Recommendation