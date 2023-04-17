import { BiSearch } from "react-icons/bi"
import "./styles.scss"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useMediaQuery } from "usehooks-ts"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Search = ({ setClose }: { setClose: React.Dispatch<boolean> }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const isMobileSmall = useMediaQuery("(max-width:768px)")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current) inputRef.current.value = ""
    toast.success("Searching...", {
      autoClose: 1500,
      hideProgressBar: true,
      icon: () => (
        <svg
          className="loading__icon"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
        </svg>
      ),
    })
    setClose(false)
  }

  const search = {
    visible: {
      height: isMobileSmall ? 50 : 70,
      transition: {
        duration: 0.1,
      },
    },

    hidden: {
      height: 0,
      transition: {
        duration: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={search}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="search__box"
    >
      <motion.form
        onSubmit={(e) => handleSubmit(e)}
        className="input__container"
      >
        <motion.button
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          transition={{ duration: 0.1 }}
          className="search__submit"
        >
          <BiSearch size={50} />
        </motion.button>
        <motion.input
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          ref={inputRef}
          type="text"
          placeholder="Search..."
        />
      </motion.form>
    </motion.div>
  )
}

export default Search
