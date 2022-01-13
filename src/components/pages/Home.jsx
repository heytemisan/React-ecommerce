import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display:grid;
    grid-template-columns: 4fr 4fr; 
    grid-template-rows: 4fr 2fr;
    grid-template-areas: 
    "heroSection heroSectionSide heroSectionSide"
    "content1 content2 content3";
    width:100%;
    height:calc(100vh - 60px);
    font-size:3rem;

    .heroSection {
        background-color:orange;
        grid-area:heroSection;
    }

    .heroSectionSide {
        background-color:white;
        grid-area:heroSectionSide;
    }

    .content1 {
        background-color:grey;
        grid-area:content1;
    }

    .content2 {
        background-color:brown;
        grid-area:content2;
    }

    .content3 {
        background-color:black;
        grid-area:content3;
    }
`

const HeroText = styled.div`
    display:grid;
    grid-template-columns: 4fr 4fr; 
    grid-template-rows: 4fr 2fr;
    grid-template-areas: ;
    width:100%;
    height:auto;
    font-size:1rem;
`

const Home = () => {
    return (
        <Container>
            <div className="heroSection">
                <HeroText>
                    <div className="smallText">smalltext</div>
                    <div className="title">title</div>
                    <div className="subTitle">subtitle</div>
                    <div className="button">button1</div>
                    <div className="button2">button2</div>
                </HeroText>
            </div>
            <div className="heroSectionSide">image</div>
            <div className="content1">content1</div>
            <div className="content2">content2</div>
            <div className="content3">content3</div>
        </Container>
    )
}

export default Home
