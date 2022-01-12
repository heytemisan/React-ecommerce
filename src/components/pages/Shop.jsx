import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width:100%;
    height:calc(100vh - 30px);
    display:flex;
    justify-content:center;
    align-items:center;
    background: #283c86;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-size:3rem;
    color:#fff;
`

const Shop = () => {
    return (
        <Container>
            Shop
        </Container>
    )
}

export default Shop
