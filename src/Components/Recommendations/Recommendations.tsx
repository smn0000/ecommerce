import React from 'react'
import Recommendation from './Recommendation'
import './styles.scss'

const Recommendations = () => {

  const MOCKDATA = {
    img: new URL('../../static/album.jpg',import.meta.url).href
  }
  
  return (
    <div className='recommendations__wrapper'>
        <div className='recommendations'>
          <p className='recommendations__title'>Recommended</p>
            <Recommendation isRight={false} data={MOCKDATA}/>
            <Recommendation isRight={true} data={MOCKDATA}/>
            <Recommendation isRight={false} data={MOCKDATA}/>
            <Recommendation isRight={true} data={MOCKDATA}/>
        </div>
    </div>
  )
}

export default Recommendations