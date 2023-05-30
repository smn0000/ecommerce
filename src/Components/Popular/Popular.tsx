import { motion } from "framer-motion"
import "./styles.scss"
import PopularItem from "./PopularItem"
import { data } from "../../interfaces"

export const Popular = () => {
  const MOCKDATA: data = {
    id: 1,
    name: "Lorem",
    img: new URL("../../static/album2.jpeg", import.meta.url).href,
    price: 10.99,
    tags: ["pop"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima distinctio ex! Optio magnam voluptatem aliquid quasi consectetur recusandae adipisci quisquam fugiat commodi accusamus earum itaque vitae, in sint quidem.",
  }
  return (
    <div className="popular__wrapper">
      <div className="popular">
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
        <PopularItem data={MOCKDATA} />
      </div>
    </div>
  )
}
