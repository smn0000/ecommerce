import {motion} from 'framer-motion'
import './styles.scss'
import PopularItem from './PopularItem'

export const Popular = () => {
  return (
    <div className='popular__wrapper'>
      <div className='popular'>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>
        <PopularItem/>

      </div>
    </div>
  )
}
