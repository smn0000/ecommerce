import './styles.scss'
import {motion, useScroll, useTransform} from 'framer-motion'
import Recommendations from '../../Components/Recommendations/Recommendations'


const Landing = () => {
  let {scrollYProgress} = useScroll()
  let y = useTransform(scrollYProgress,[0,1],['0%','80%'])

  const url = new URL('../../static/hero.jpg', import.meta.url).href
  return (
    <div className='landing'>
      <motion.div className='hero' style={{y,}}>
        <p className='hero__text'>Discover music with us</p>
        <img src={url} alt="" loading='lazy' />
      </motion.div>
      <section>
        <Recommendations/>
      </section>
    </div>
    
  )
}

export default Landing