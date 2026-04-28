import { Link } from "react-router-dom"
import * as styled from "./style"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const Header = () => {
  const items = useSelector((state: RootState) => state.cart.items)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <styled.HeaderContainer>
      <styled.Logo>Logo</styled.Logo>

      <styled.CartContainer>
        <styled.CartIcon>
          <Link to={"/cart"}>🛒</Link>
        </styled.CartIcon>

        <styled.CartCount>{totalItems}</styled.CartCount>
      </styled.CartContainer>
    </styled.HeaderContainer>
  )
}
