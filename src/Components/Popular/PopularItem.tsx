import {motion, useAnimate} from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'
import { useRef } from 'react'
import { useOnClickOutside } from '../../useOnClickOutside'


const PopularItem = () => {

  const isMobile = useMediaQuery('(max-width:1024px)')
  const [scope, animate] = useAnimate()
  const isVisible = useRef(false)
  
  //Sets the opacity to 0 if clicked outside 
  useOnClickOutside(scope, () => {
      isVisible.current && animate(scope.current, {opacity:0}) 
      isVisible.current = false
    })
  
    //Only for mobile viewport
  const handleClickAnimation = () => {
    if (!isMobile) return

    !isVisible.current && animate(scope.current, {opacity:1})
    isVisible.current && animate(scope.current, {opacity:0})

    isVisible.current = !isVisible.current
  }


  return (
    <div className='popular__item'>
        <div className='popular__item__face'>
          Item
        </div>
        <div className='popular__item__more'ref={scope} onClick={handleClickAnimation} onMouseEnter={() => animate(scope.current, {opacity:1}) } onMouseLeave={() => { animate(scope.current, {opacity:0}) }}>
            <div>Qwerty</div>
        </div>
    </div>
  )
}

export default PopularItem