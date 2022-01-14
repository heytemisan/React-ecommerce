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
        font-size:1.2rem ;
    }

    .playbtn {
        width:20px;
        margin-right: 10px;
    }

    .getStartedbtn {
        background-color: #ED303C;
        color: white;
        width: 150px;
        text-align: center;
        margin-right:20px ;
        padding: 26px;
        border-radius:20px;
        height: 70px;
    }

    .getStartedbtn > a{
        color:white;
        font-weight:bold;
        text-decoration:none;
    }

    .watchVidbtn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ED303C;
        color: white;
        width: 160px;
        text-align: center;
        padding: 15px;
        border-radius:20px;
        height: 70px;
        text-decoration:none;
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
                            <a href="#" className="getStartedBtn">Get Started</a>
                        </div>
                        <a className="watchVidbtn" href="#">
                            <img src={Play} alt="watchbtn" className="playbtn"/>
                            <p className="vidText">Watch Video</p>
                        </a>
                    </div>
                    <div className="review">
                        <div className="imageCard">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="watchbtn" className="playbtn1"/>
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="watchbtn" className="playbtn2"/>
                            <img src="https://p1.pxfuel.com/preview/901/383/654/girl-studio-female-woman-profile-black-and-white-royalty-free-thumbnail.jpg" alt="watchbtn" className="playbtn3"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroImage">

            </div>
            
        </Container>
    )
}

export default HeroSection
