import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavAvatar from './NavAvatar';

const Container = styled.div`
    color: #1f4037;
    height: 60px;
    display:flex;
    align-items:center
`
const Left = styled.div`
    flex:3;
    padding-left:40px;
`
const Right = styled.div`
    flex:7;
    padding-right:40px;
    display:flex;
    justify-content:flex-end;
`

const NavbarContainer = styled.div`

`

const NavbarLink = styled(NavLink)`
    text-decoration:none;
    font-size:1rem;
    color:#1f4037;
    margin:2px;
    padding:0 10px;

`

const Nav = styled.a`
    margin:2px;
    padding:0 10px;


    .fas.fa-cart-plus {
        color: #1f4037;
    }
`
const Button = styled.button `
    font-size:1rem;
    padding: 08px;
    background: inherit;
    border: 1px solid #1f4037;
    border-radius: 5px;
    color: #1f4037;
`

const Logo = styled.h1`

`

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo>Logo</Logo>
            </Left>
            <Right>
                <NavbarContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/pricelist">pricelist</NavbarLink>
                    <NavbarLink to="/benefit">benefit</NavbarLink>
                    <NavbarLink to="/learn">learn</NavbarLink>
                    <Nav href="#"><Button  className='btn' >Become a seller</Button></Nav>
                    <Nav href="#"><i className="fas fa-cart-plus"></i></Nav>
                    <Nav className="has-dropdown">
                        <a href="#"><img className="imgbtn" src={'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'} alt="" /></a>
                        <div class="dropdown">
                            <div class="dropdown-item">
                                <a href="#">sign in</a>
                                <a href="#">sign out</a>
                            </div>
                        </div>
                    </Nav>
                </NavbarContainer>
            </Right>
        </Container>
    )
}

export default Navbar
