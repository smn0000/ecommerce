import './styles.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const MobileMenu = ({handleClose}:{handleClose:React.Dispatch<boolean>}) => {
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
      <motion.ul className='mobile-menu__list'>
        <motion.li onClick={() => handleClose(true)}><Link to='/cart'>Cart</Link></motion.li>
        <motion.li onClick={() => handleClose(true)}>Support</motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default MobileMenu