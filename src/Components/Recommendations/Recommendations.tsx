import React from 'react'
import Recommendation from './Recommendation'
import './styles.scss'

const Recommendations = () => {
  return (
    <div className='recommendations__wrapper'>
        <div className='recommendations'>
            <Recommendation isRight={false}/>
            <Recommendation isRight={true}/>
            <Recommendation isRight={false}/>
            <Recommendation isRight={true}/>
        </div>
    </div>
  )
}

export default Recommendations