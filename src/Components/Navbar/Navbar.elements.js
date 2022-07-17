import styled from 'styled-components'

export const Nav = styled.div`
    height: 6.5rem;
    position:absolute ;
    background-color:transparent ;
    z-index:99 ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const NavContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 3rem;
    margin-top: 1rem ;
    &h1{
        font-size:2.5rem ;
        user-select:none;
        @media (max-width:1100px){
            font-size:2.2rem ;
        }
    }
    @media (max-width:1100px){
            padding:0 2rem ;
        }
`

export const NavLinkContainer = styled.div`
    margin-top:5rem ;
    @media (max-width:800px){
        margin-top: 3rem;
    }
`
export const NavMenu = styled.div`
    &:hover{
        color:var(--primary-2)
    }
    @media (max-width:600px){
        color: var(--primary-2)
    }
`