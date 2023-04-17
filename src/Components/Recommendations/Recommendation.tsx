import React from "react"
import "./styles.scss"
import { data } from "../../interfaces"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Recommendation = ({
  isRight,
  data,
}: {
  isRight: Boolean
  data: data
}) => {
  const handleAddToCart = () => {
    toast.success("Added To Cart!", {
      autoClose: 500,
      hideProgressBar: true,
    })
  }
  return (
    <div className="recommendation">
      <img src={`${data.img}`} className={`${isRight ? "right" : ""}`} alt="" />

      <div className="recommendation__info">
        <div className="recommendation__top">
          <p className="recommendation__title">Title</p>
          <p className={`recommendation__text ${isRight ? "right" : ""}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            aliquid minima quod odit modi distinctio provident assumenda quidem
            architecto, sint molestias voluptatibus ea dicta dolor placeat id
            eum mollitia quibusdam.
          </p>
        </div>

        <div className="recommendation__bottom">
          <div className="recommendation__buy">
            <span className="buy__price">19.99$</span>
            <motion.button
              className="buy__add "
              onClick={handleAddToCart}
              transition={{ duration: 0.25, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
            >
              Add To Cart
            </motion.button>
          </div>
          <div className="recommendation__tags">
            <p>HipHop</p>
            <p>Rap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation
