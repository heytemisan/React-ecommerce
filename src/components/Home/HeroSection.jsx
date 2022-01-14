import React from 'react';
import styled from 'styled-components';
import Play from '../../icons/play.png'

const Container = styled.div `
    padding-left:80px;
    padding-right:80px;
    display: flex;

    .text-Container {
        width:50%;
    }
    .smallText {
        margin-top:10px;
    }

    .text-btn {
        background: #FFEAEB;
        border-radius: 20px;
        margin-top:95px;
        color:#FF0944;
        width: 150px;
        padding: 13px;
    }

    .title-header {
        font-size: 4.9rem;
        font-family: 'LibraSansModernRegular'; 
        line-height: 1.2;
        margin-top:40px;
        font-weight:900;
        color:#323232;
    }

    .color {
        color:#FF0041;
    }

    .subtitle {
        color:#595959;
        margin-top: 20px;
        font-size: 1.5rem;
        line-height:1.5;
    }

    .buttons {
        display:flex;
        margin-top: 20px;
    }

    .playbtn {
        width:20px;
        margin-right:10px;
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

    .watchVidbtn {
        color:white;
        width: 150px;
        padding: 13px;
    }

    .watchVidbtn:hover {
        background-color: #555E7B;
        border-radius: 50px;
        text-decoration:none;

    }

`

const HeroSection = () => {
    return (
        <Container>
            <div className="text-Container">
                <div className="smallText">
                    <div className="text-btn">
                        More than faster <span>&#x1F353;</span>
                    </div>
                    <div className="title">
                        <h1 className="title-header">Be The Fastest In Delivering Your <span className="color">Food</span></h1>
                    </div>
                    <div className="subTitle">
                        <p className="subtitle">Our job is to feel your tummy with delicious food and with fast delivery.</p>
                    </div>
                    <div className="buttons">
                        <div className="getStartedbtn">
                            <a href="#">Get Started</a>
                        </div>
                        <a className="watchVidbtn" href="#">
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <p className="vidText">Watch Video</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="heroImage">

            </div>
            
        </Container>
    )
}

export default HeroSection
