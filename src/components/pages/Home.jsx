import React from 'react';
import styled from 'styled-components';
import Play from '../../icons/play.png'

const Container = styled.div `
    display:grid;
    grid-template-columns: 4fr 4fr; 
    grid-template-rows: 5fr 2fr;
    grid-template-areas: 
    "heroSection heroSectionSide heroSectionSide"
    "content1 content2 content3";
    width:100%;
    height:calc(100vh - 60px);
    font-size:3rem;
    padding-left: 40px;
    padding-right:40px;

    .heroSection {
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
    grid-template-columns: 4fr; 
    grid-template-rows: 100px 200px 50px 30px 50px;
    grid-template-areas: 
    "smallText smallText"
    "title title"
    "subTitle subTitle"
    "button button2"
    "review review";
    width:100%;
    height:auto;
    font-size:1rem;

    .smallText {
        grid-area:smallText;
        margin50px;
    }

    .text-btn {
        background: #FFAAA6;
        width: 140px;
        padding: 10px;
        border-radius: 20px;
        margin-top:45px;
        color:#ED303C;
    }

    .title {
        grid-area:title;
    }

    .title-header {
        font-size: 3.9rem;
    }

    .color {
        color:#ED303C;
    }

    .subTitle {
        grid-area:subTitle;
    }

    .subtitle {
        color:#556270;
        margin-top: 10px;
    }

    .button {
        grid-area:button;
        width: 50%;
    }

    .getStartedbtn {
        background-color: #ED303C;
        color:white;
        width: 100px;
        padding: 13px;
        border-radius: 50px;
    }

    .getStartedbtn > a{
        color:white;
        font-weight:bold;
        text-decoration:none;
    }

    .button2 {
        grid-area:button2;
        width: 50%;
    }

    .review {
        grid-area:review;
    }

    .imageCard {
        margin:30px
    }

    .watchVidbtn {
        color:white;
        width: 150px;
        padding: 13px;
        margin-right: 200px;
        display:flex;

    }

    .playbtn {
        width:20px;
        margin-right:10px;
    }

    .vidText {
        vertical-align:middle;
        color:black;
        font-weight:bold;
    }
`

const Home = () => {
    return (
        <Container>
            <div className="heroSection">
                <HeroText>
                    <div className="smallText">
                        <div className="text-btn">
                            More than faster <span>&#x1F353;</span>
                        </div>
                    </div>
                    <div className="title">
                        <h1 className="title-header">Be The Fastest In Delivering Your <span className="color">Food</span></h1>
                    </div>
                    <div className="subTitle">
                        <p className="subtitle">Our job is to feel your tummy with deliious food and with fast delivery.</p>
                    </div>
                    <div className="button">
                        <div className="getStartedbtn">
                            <a href="#">Get Started</a>
                        </div>
                    </div>
                    <div className="button2">
                        <a className="watchVidbtn" href="#">
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <p className="vidText">Watch Video</p>
                        </a>
                    </div>
                    <div className="review">
                        <div className="imageCard">
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                        </div>
                    </div>
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
