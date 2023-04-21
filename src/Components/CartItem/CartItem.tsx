import React from "react"
import "./styles.scss"
import { cartData } from "../../interfaces"
import { BiTrash, BiPlus, BiMinus } from "react-icons/bi"
import Button from "../Button/Button"

const CartItem = ({
  data,
  handleRemoveItem,
  handleIncrement,
  handleDecrement,
}: {
  data: cartData
  handleRemoveItem: (id: Number) => void
  handleDecrement: (id: Number) => void
  handleIncrement: (id: Number) => void
}) => {
  return (
    <div className="cart__item">
      <img src={`${data.img}`} alt="" />
      <div className="cart__item__bottom">
        <div className="cart__item__row">
          <p className="cart__item__name">{data.name}</p>
          <p className="cart__item__price">${data.price}</p>
        </div>
        <div className="cart__item__row">
          <div className="cart__item__quantity">
            <button
              onClick={() => {
                if (data.quantity <= 0) return
                handleDecrement(data.id)
              }}
            >
              <BiMinus size={20} />
            </button>
            <p>{data.quantity}</p>
            <button
              onClick={() => {
                if (data.quantity >= 10) return
                handleIncrement(data.id)
              }}
            >
              <BiPlus size={20} />
            </button>
          </div>
        </div>
        <div className="cart__item__row">
          <Button
            onClick={() => handleRemoveItem(data.id)}
            icon={<BiTrash size={30} color="#f20" />}
            text={"Remove"}
            color="black"
          />
          {/*           <button
            className="cart__item__remove"
            onClick={() => handleRemoveItem(data.id)}
          >
            <BiTrash size={25} />
            <p>Remove</p>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default CartItem
