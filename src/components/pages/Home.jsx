import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display:grid;
    grid-template-columns: 1fr 3fr 2fr; 
    grid-template-rows: 6fr 3fr;
    grid-template-areas: 
    "heroSection heroSection heroSection"
    "content1 content1 content1";
    width:100%;
    height:calc(100vh - 60px);
    font-size:3rem;

    .heroSection {
        background-color:orange;
        grid-area:heroSection
    }

    .content1 {
        background-color:grey;
        grid-area:content1;
    }
`

const Home = () => {
    return (
        <Container>
            <div className="heroSection">hero</div>
            <div className="content1">content1</div>
        </Container>
    )
}

export default Home
