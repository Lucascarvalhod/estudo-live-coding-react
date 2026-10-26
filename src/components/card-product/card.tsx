import * as style from "./style"
import { Product } from "../../types/get-products.types"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/features/cart-slice"

interface CardProductProps {
  product: Product
}

export const CardProduct = ({ product}: CardProductProps) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem(product))
  }

  return (
    <style.Container>
      <style.Image src={product.image} />

      <style.Price>
        R$ {product.price.toFixed(2)}
      </style.Price>

      <style.Title>{product.title}</style.Title>
      <style.Button onClick={handleAddToCart}>
        Adicionar ao carrinho
      </style.Button>
    </style.Container>
  )
}