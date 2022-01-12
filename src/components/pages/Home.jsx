import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width:100%;
    height:calc(100vh - 60px);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:3rem;
`

const Home = () => {
    return (
        <Container>
            Home
        </Container>
    )
}

export default Home