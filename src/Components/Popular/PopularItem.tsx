import { motion, useAnimate } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"
import { useRef } from "react"
import { useOnClickOutside } from "../../useOnClickOutside"
import { data } from "../../interfaces"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const PopularItem = ({ data }: { data: data }) => {
  const isMobile = useMediaQuery("(max-width:1024px)")
  const [scope, animate] = useAnimate()
  const isVisible = useRef(false)

  //Sets the opacity to 0 if clicked outside
  useOnClickOutside(scope, () => {
    isVisible.current && animate(scope.current, { opacity: 0 })
    isVisible.current = false
  })

  //Only for mobile viewport
  const handleClickAnimation = () => {
    if (!isMobile) return

    !isVisible.current && animate(scope.current, { opacity: 1 })
    isVisible.current && animate(scope.current, { opacity: 0 })

    isVisible.current = !isVisible.current
  }

  const handleAddToCart = () => {
    toast.success("Added To Cart!", {
      autoClose: 500,
      hideProgressBar: true,
    })
  }

  return (
    <div className="popular__item">
      <div className="popular__item__face">
        <img src={`${data.img}`} alt="" />
      </div>
      <div
        className="popular__item__more"
        ref={scope}
        onClick={handleClickAnimation}
        onMouseEnter={() => animate(scope.current, { opacity: 1 })}
        onMouseLeave={() => {
          animate(scope.current, { opacity: 0 })
        }}
      >
        <div className="popular__item__more__top">
          <div>{data.name}</div>
        </div>
        <div className="popular__item__more__bottom">
          <motion.button
            onClick={handleAddToCart}
            transition={{ duration: 0.25, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
          >
            Add To Cart
          </motion.button>
        </div>
        <div className="popular__item__more__price">{data.price}$</div>
      </div>
    </div>
  )
}

export default PopularItem
