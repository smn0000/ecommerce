import './styles.scss'
import {motion} from 'framer-motion'

const MobileMenu = () => {
    const menu = {
        visible:{
          height:'calc(100vh + 80px)',
          transition: {
            duration: .1,
          },
        },

        hidden:{
          height:0,
          transition: {
            duration: .1,
          },
        },
    }
  return (
    <motion.div className='mobile-menu' variants={menu} initial='hidden' exit='hidden' animate='visible'>
        <motion.div>MobileMenu</motion.div>
        <motion.div>MobileMenu</motion.div>
        <motion.div>MobileMenu</motion.div>
    </motion.div>
  )
}

export default MobileMenu