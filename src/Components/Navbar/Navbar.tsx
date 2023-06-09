import "./styles.scss"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
  AnimatePresence,
} from "framer-motion"
import { Link } from "react-router-dom"
import { useMediaQuery } from "usehooks-ts"
import { BiMenu, BiSearch } from "react-icons/bi"
import { useState, useRef } from "react"
import MobileMenu from "../MobileMenu/MobileMenu"
import Search from "../Search/Search"
import { useOnClickOutside } from "../../useOnClickOutside"

const Navbar = () => {
  //Animation
  let { scrollY } = useScroll()
  const [navRef, animate] = useAnimate()
  let prev = 0

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (showMobileMenu) return
    if (latest < 80) {
      animate(
        navRef.current,
        {
          y: -latest,
          backgroundColor: "rgba(255, 255, 255,0)",
          boxShadow: "0px 0px 0px rgba(255, 255, 255,0)",
        },
        { ease: "linear", duration: 0 }
      )
      setShowSearch(false)
    } else if (prev > latest) {
      animate(
        navRef.current,
        {
          y: 0,
          backgroundColor: "rgba(255,255,255,255)",
          boxShadow: "1px 1px 15px rgba(0,0,0,.5)",
        },
        { ease: "linear", duration: 0.2 }
      )
      setShowSearch(false)
    } else
      animate(
        navRef.current,
        { y: -80, duration: 0.2, boxShadow: "1px 1px 15px rgba(0,0,0,.5)" },
        { ease: "linear", duration: 0.2 }
      )

    prev = latest
  })

  const navAnimations = {
    initial: {
      backgroundColor: "rgba(255, 255, 255,0)",
      transition: { duration: 0.5 },
    },
    hover: {
      backgroundColor: "rgba(255,255,255,255)",
      transition: { duration: 50 },
    },
  }

  const isMobile = useMediaQuery("(max-width:1024px)")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef(null)

  useOnClickOutside(navRef, () => {
    setShowMobileMenu(false)
    setShowSearch(false)
  })

  // Disables scroll when menu is open
  const body = document.querySelector("body")
  if (showMobileMenu && body) body.style.overflow = "hidden"
  else if (body) body.style.overflow = "auto"

  const handleShowMenu = () => {
    setShowMobileMenu((current) => !current)
    showSearch && setShowSearch(false)
  }

  const handleShowSearch = () => {
    setShowSearch((current) => !current)
    showMobileMenu && setShowMobileMenu(false)
  }

  return (
    <>
      <motion.nav
        className="navbar"
        ref={navRef}
        variants={navAnimations}
        initial="initial"
      >
        <AnimatePresence>
          {showSearch && <Search setClose={setShowSearch} />}
        </AnimatePresence>
        <AnimatePresence>
          {showMobileMenu && isMobile && (
            <MobileMenu handleClose={handleShowMenu} />
          )}
        </AnimatePresence>

        {!isMobile && (
          <>
            <ul className="nav__left">
              <li>
                <button>
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li>
                <button onClick={() => setShowSearch((current) => !current)}>
                  Search
                </button>{" "}
              </li>
            </ul>
          </>
        )}

        {isMobile && (
          <>
            <div className="hamburger">
              <button onClick={handleShowMenu}>
                <BiMenu size={50} />
              </button>
            </div>
          </>
        )}

        <div className="nav__middle">
          <p>
            <Link to="/">Music Shop</Link>
          </p>
        </div>

        {isMobile && (
          <>
            <button className="search" onClick={handleShowSearch}>
              <BiSearch size={50} />
            </button>
          </>
        )}
        {!isMobile && (
          <>
            <ul className="nav__right">
              <li>
                <button>
                  <Link to="/cart">Cart</Link>
                </button>
              </li>
            </ul>
          </>
        )}
      </motion.nav>
    </>
  )
}

export default Navbar
