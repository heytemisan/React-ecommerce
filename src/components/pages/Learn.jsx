import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width:100%;
    height:calc(100vh - 60px);
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    font-size:3rem;
    background: #1f4037;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Learn = () => {
    return (
        <Container>
            Learn
        </Container>
    )
}

export default Learn
