import { BiSearch } from 'react-icons/bi'
import './styles.scss'
import {motion} from 'framer-motion'
import {useRef} from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Search = ({handleClose}:{handleClose:React.Dispatch<boolean>}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const isMobileSmall = useMediaQuery('(max-width:768px)')

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        if(inputRef.current) inputRef.current.value = ''
        handleClose(false)
    }

    const search = {
        visible:{
        height: isMobileSmall ? 50 : 70,
        transition: {
            duration: .1,
        },
        },

        hidden:{
        height:0,
        transition: {
            duration: .1,
        },
        },
    }

  return (
    <motion.div variants={search} initial='hidden' animate='visible' exit='hidden' className='search__box'>
        <motion.form onSubmit={(e) => handleSubmit(e)} className='input__container'>
            <motion.button initial={{scale:.5}} animate={{scale:1}} exit={{scale:.5}} transition={{duration:.1}} className='search__submit'><BiSearch size={50}/></motion.button>
            <motion.input  initial={{scale:.9}} animate={{scale:1}} exit={{scale:.9}} transition={{duration:.1}} ref={inputRef} type="text" placeholder='Search...' />
        </motion.form>
    </motion.div>
  )
}

export default Search