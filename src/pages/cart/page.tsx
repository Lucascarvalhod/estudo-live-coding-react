import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { removeItem, clearCart } from "../../store/features/cart-slice"

export const CartPage = () => {
  const dispatch = useDispatch()

  const { items, total } = useSelector((state: RootState) => state.cart)

  return (
    <div>
      <h1>Carrinho</h1>

      {items.length === 0 && <p>Seu carrinho está vazio</p>}

      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} width={80} />

          <h3>{item.title}</h3>

          <p>Quantidade: {item.quantity}</p>

          <p>Preço: R$ {item.price.toFixed(2)}</p>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remover
          </button>
        </div>
      ))}

      <h2>Total: R$ {total.toFixed(2)}</h2>

      <button onClick={() => dispatch(clearCart())}>
        Limpar carrinho
      </button>
    </div>
  )
}