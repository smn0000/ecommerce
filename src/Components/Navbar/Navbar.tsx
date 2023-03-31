import './styles.scss'
import {motion, useScroll, useMotionValueEvent, useAnimate, AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import {BiMenu, BiSearch} from 'react-icons/bi'
import {useState, useEffect, useRef} from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'

const Navbar = () => {

    function useHideOnOutsideClick(ref:any) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
              setShowMobileMenu(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("touchmove", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchmove", handleClickOutside);
          };
        }, [ref]);
      }

    const isMobile = useMediaQuery('(max-width:1024px)')
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // Disables scroll when menu is open
    const body = document.querySelector('body')
    if(showMobileMenu && body) body.style.overflow = 'hidden'
    else if(body) body.style.overflow = 'auto'



 //Animation
    let {scrollY} = useScroll()
    const [navRef, animate] = useAnimate()
    let prev = 0

    useHideOnOutsideClick(navRef)



    useMotionValueEvent(scrollY, "change", (latest) => {
        if(showMobileMenu) return
        if(latest<80) animate(navRef.current, {y:-latest, backgroundColor: 'rgba(255, 255, 255,0)', boxShadow: '0px 0px 0px rgba(255, 255, 255,0)'}, { ease: "linear", duration: 0 })
        else if(prev>latest) animate(navRef.current, {y:0 ,backgroundColor: 'rgba(255,255,255,255)', boxShadow: '1px 1px 15px rgba(0,0,0,.5)'}, { ease: "linear",duration: .2 })
        else animate(navRef.current, {y:-80,duration: .2, boxShadow:'1px 1px 15px rgba(0,0,0,.5)'},{ ease: "linear",duration: .2 })

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
    <>
    <motion.nav className='navbar' ref={navRef} variants={navAnimations} initial='initial'>
        <AnimatePresence>
            {showMobileMenu && isMobile && <MobileMenu/>}
        </AnimatePresence>
        {!isMobile &&<>
            <ul>
                <li>Menu</li>
                <li>Search</li>
            </ul>
        </>}
        
        {isMobile && <>
        
            <div className='hamburger'>
                <button onClick={() => setShowMobileMenu(current => !current)}><BiMenu size={50}/></button> 
            </div>

        </>}
      
        <div className='nav__middle'>
            <p><Link to='/'>Music Shop</Link></p>
        </div>

        {isMobile && <>
            <div className="search"><BiSearch size={50}/></div>
        </>}
        {!isMobile && <>
            <ul>
                <li>Support</li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </>}

    </motion.nav>

    
    </>)
}

export default Navbar