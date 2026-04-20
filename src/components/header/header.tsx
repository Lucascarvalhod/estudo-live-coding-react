import * as styled from "./style"

export const Header =()=>{
    return(
        <styled.HeaderContainer>
            <styled.Logo>Logo</styled.Logo>
            
            <styled.CartContainer>
                <styled.CartIcon>🛒</styled.CartIcon>
                <styled.CartCount>2</styled.CartCount>
            </styled.CartContainer>
            
        </styled.HeaderContainer>
    )
}
