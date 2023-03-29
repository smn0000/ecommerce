import React from 'react'
import './styles.scss'

const Recommendation = ({isRight}:{isRight:Boolean}) => {
    const img = new URL('../../../static/album.jpg',import.meta.url).href
  return (
    <div className='recommendation'>
        {!isRight && <img src={img} alt="" />}
        <div className='album__info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi dolores ut odio voluptates atque, fugit at? Unde eum veritatis vel beatae numquam, iure dolor reiciendis. Expedita molestiae sint rerum.</div>
        {isRight && <img src={img} alt="" />}
    </div>
  )
}

export default Recommendation