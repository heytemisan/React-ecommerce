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
const ImageButton = styled.button `
    padding: 5px;
    border-radius: 20px;
    border-color: transparent;

    img {
        width:20px;
        height:20px
    }
`

const NavAvatar = () => {
    return (
        <Button>
            <NavItem>
                hello
            </NavItem>
        </Button>
    )
}

function NavItem(props) {
const [open, setOpen] = useState(false);

return (
    <>
        <ImageButton href="#" onClick={() => setOpen(!open)}>
            <img src={'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'} alt="" />
        </ImageButton>

        {open && props.children}
    </>
);
}

export default NavAvatar
