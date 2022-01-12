import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    font-size:16px;
    color:#1f4037;
    margin:5px;
    padding:0 10px;
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
                    <NavbarLink to="/learn"><a>Hello</a></NavbarLink>
                </NavbarContainer>
            </Right>
        </Container>
    )
}

export default Navbar
