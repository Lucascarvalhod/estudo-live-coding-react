import { Link } from "react-router-dom"
import * as styled from "./style"

export const Header =()=>{
    return(
        <styled.HeaderContainer>
            <styled.Logo>Logo</styled.Logo>
            
            <styled.CartContainer>
                <styled.CartIcon>
                    <Link to={"/cart"}>
                        🛒
                    </Link>
                </styled.CartIcon>
                <styled.CartCount>2</styled.CartCount>
            </styled.CartContainer>
            
        </styled.HeaderContainer>
    )
}
