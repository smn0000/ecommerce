import "./styles.scss"
import { cartData } from "../../interfaces"
import { useEffect, useState } from "react"
import CartItem from "../../Components/Cartitem/CartItem"
import { toast } from "react-toastify"

const Cart = () => {
  const imgUrl = new URL("../../static/album.jpg", import.meta.url).href

  const MOCK_DATA: cartData[] = [
    {
      id: 1,
      name: "Title",
      img: imgUrl,
      price: 19.99,
      tags: ["HipHop", "Rap"],
      quantity: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.",
    },

    {
      id: 2,
      name: "Title",
      img: imgUrl,
      price: 19.99,
      tags: ["HipHop", "Rap"],
      quantity: 1,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquid minima quod odit modi distinctio provident assumenda quidem architecto, sint molestias voluptatibus ea dicta dolor placeat id eum mollitia quibusdam.",
    },
    {
      id: 3,
      name: "Title",
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
        <div>Total:{formatter.format(total)}</div>
        <ul>
          Items:
          {cartItems.map((item) => (
            <li>
              <span>{item.name} </span>
              <span>{item.price} x </span>
              <span>{item.quantity} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cart
