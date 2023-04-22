import "./styles.scss"
import { cartData } from "../../interfaces"
import { useEffect, useState } from "react"
import CartItem from "../../Components/Cartitem/CartItem"
import { toast } from "react-toastify"
import Button from "../../Components/Button/Button"
import { BiCart } from "react-icons/bi"

const Cart = () => {
  const imgUrl = new URL("../../static/album.jpg", import.meta.url).href

  const MOCK_DATA: cartData[] = [
    {
      id: 1,
      name: "Lorem Ipsum",
      img: imgUrl,
      price: 19.99,
      tags: ["HipHop", "Rap"],
      quantity: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.",
    },

    {
      id: 2,
      name: "Lorem Ipsum",
      img: imgUrl,
      price: 19.99,
      tags: ["HipHop", "Rap"],
      quantity: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.",
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      img: imgUrl,
      price: 19.99,
      tags: ["HipHop", "Rap"],
      quantity: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.",
    },
  ]

  const [cartItems, setCartItems] = useState(MOCK_DATA)
  const [total, setTotal] = useState(0)

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  useEffect(() => {
    let total = 0
    cartItems.forEach((item) => (total += item.price * item.quantity))
    setTotal(total)
  }, [cartItems])

  const handleRemoveItem = (id: Number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast.success("Deleted from cart", {
      autoClose: 1500,
      hideProgressBar: true,
    })
  }

  const handleIncrement = (id: Number) => {
    setCartItems(
      cartItems.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      })
    )
  }
  const handleDecrement = (id: Number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  }

  const handleCheckout = () => {
    toast.success("Processing payment...", {
      autoClose: 1500,
      hideProgressBar: true,
      icon: () => (
        <svg
          className="loading__icon"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
        </svg>
      ),
    })
  }

  return (
    <div className="cart">
      <div className="cart__items">
        {cartItems.length != 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              handleRemoveItem={handleRemoveItem}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
      <div className="cart__pay">
        <div className="cart__total">Total:{formatter.format(total)}</div>
        <ul className="cart__itemlist">
          Items:
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name} </span>
              <span>{item.price} x </span>
              <span>{item.quantity} </span>
            </li>
          ))}
        </ul>
        <Button
          text={"Checkout"}
          onClick={handleCheckout}
          color="black"
          icon={<BiCart size={30} />}
        />
      </div>
    </div>
  )
}

export default Cart
