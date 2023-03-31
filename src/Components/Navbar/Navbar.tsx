import './styles.scss'
import {motion, useScroll, useMotionValueEvent, useAnimate} from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
 //Animation
    let {scrollY} = useScroll()
    const [scope, animate] = useAnimate()
    let prev = 0



    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest<80) animate(scope.current, {y:-latest, backgroundColor: 'rgba(255, 255, 255,0)', boxShadow: 'none'}, { ease: "linear", duration: 0 })
        else if(prev>latest) animate(scope.current, {y:0 ,backgroundColor: 'rgba(255,255,255,255)', boxShadow:'1px 1px 10px rgba(0,0,0,.5'}, { ease: "linear",duration: .2 })
        else animate(scope.current, {y:-80,duration: .2, boxShadow:'1px 1px 10px rgba(0,0,0,.5'},{ ease: "linear",duration: .2 })

        prev = latest
    })

    const navAnimations={
        initial:{
            backgroundColor: 'rgba(255, 255, 255,0)',
            transition:{duration: .5},
        },
        hover:{
            backgroundColor: 'rgba(255,255,255,255)',
            transition:{duration: 50},
        },
    }
  return (
    <motion.nav className='navbar' ref={scope} variants={navAnimations} initial='initial'>
        <div className='nav__left'>
            <ul>
                <li>Menu</li>
                <li>Search</li>
            </ul>
        </div>
        <div className='nav__middle'>
            <h1><Link to='/'>Music Shop</Link></h1>
        </div>
        <div className='nav__right'>
            <ul>
                <li>Support</li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </div>
    </motion.nav>
  )
}

export default Navbar