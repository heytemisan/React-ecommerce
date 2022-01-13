import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.a `
    .nav-item {
        text-decoration:none;
        font-size:0.8rem;
        color:#1f4037;
        margin:2px;
        padding:0 10px;
    }
`
const ImageButton = styled.a `
    padding: 5px;
    border-radius: 20px;
    border-color: transparent;
    background-color: transparent;
`

const NavAvatar = () => {
    return (
        <Button>
            <NavItem>
                
            </NavItem>
        </Button>
    )
}

function NavItem() {
return (
    <>
        <ImageButton>
            <div className="has-dropdown">
                <a href="#"> <img className="imgbtn" src={'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'} alt="" /></a>
                    <ul className="dropdown">
                        <li className="dropdown-item">
                            <a href="#">light</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="#">dark</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="#">solarize</a>
                        </li>
                    </ul>
            </div>
        </ImageButton>
    </>
);
    }

export default NavAvatar
