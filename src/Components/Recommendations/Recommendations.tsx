import React from "react"
import Recommendation from "./Recommendation"
import "./styles.scss"
import { cartData } from "../../interfaces"

const Recommendations = () => {
  const MOCKDATA: cartData = {
    id: 0,
    name: "lorem",
    price: 19.99,
    tags: ["HipHop", "Rap"],
    description: "Lorem Ipsum",
    quantity: 1,
    img: new URL("../../static/album.jpg", import.meta.url).href,
  }

  return (
    <div className="recommendations__wrapper">
      <div className="recommendations">
        <p className="recommendations__title">Recommended</p>
        <Recommendation isRight={false} data={MOCKDATA} />
        <Recommendation isRight={true} data={MOCKDATA} />
        <Recommendation isRight={false} data={MOCKDATA} />
        <Recommendation isRight={true} data={MOCKDATA} />
      </div>
    </div>
  )
}

export default Recommendations
