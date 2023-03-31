import './styles.scss'
import {motion} from 'framer-motion'

const MobileMenu = () => {
    const menu = {
        visible:{
            height:'calc(100vh)',
            transition: {
                duration: .2,
                when: "beforeChildren",
                staggerChildren: 1,
              },
        },

        hidden:{
            height:0,
            transition: {
                duration: .2,
                when: "beforeChildren",
                staggerChildren: 1,
              },
        },
    }
  return (
    <motion.div className='mobile-menu' variants={menu} initial='hidden' exit='hidden' animate='visible'>
        <motion.div >MobileMenu</motion.div>
        <motion.div >MobileMenu</motion.div>
        <motion.div >MobileMenu</motion.div>
    </motion.div>
  )
}

export default MobileMenu