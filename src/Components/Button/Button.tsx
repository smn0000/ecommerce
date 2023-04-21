import { ReactNode } from "react"
import { motion } from "framer-motion"
import "./styles.scss"

const Button = ({
  text,
  onClick,
  icon = null,
  color = "white",
}: {
  text: String
  onClick: () => any
  icon?: ReactNode | null
  color?: string
}) => {
  return (
    <motion.button
      className="button"
      style={{ color: color }}
      onClick={onClick}
      transition={{ duration: 0.25, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.3 }}
    >
      {icon}
      <p>{text}</p>
    </motion.button>
  )
}

export default Button
