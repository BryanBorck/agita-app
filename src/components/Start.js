import React from 'react';
import styled from 'styled-components';
import LogoAGITA from '../imgs/Logo_AGITA.png';
import FamilyS from '../imgs/Family_Sticker.png';
import FlagS from '../imgs/Flag_Sticker.png';
import AsaR from '../imgs/AsaR.png';
import AsaL from '../imgs/AsaL.png';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

export default function Start() {
    const history = useNavigate();
    return (
        <StartStyle>
            <Header/>
            <DivStyle>
                <LogoStyle src={LogoAGITA} alt="" />
                <TitleStyle>Associação <l>L</l><g>G</g><b>B</b><t>T</t><q>Q</q><i>I</i><a>A</a><m>+</m> do ITA</TitleStyle>
                <LoginButton onClick={() => history("/login")}> Faça seu login</LoginButton>
                <ChatButton onClick={() => history("/")}> Quer conversar com a gente?</ChatButton>
                {/* <AsaLStyle src={AsaL} alt="" /> */}
                <FamilyStyle src={FamilyS} alt="" />
                {/* <AsaRStyle src={AsaR} alt="" /> */}
                <FlagStyle src={FlagS} alt="" />
            </DivStyle>

        </StartStyle>
    );
}

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    background: #96156A;
    padding-top: 160px;
    padding-bottom: 120px;
    
`;

const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;

    color: #FFFFFF;
    font-size: 16pt;
    text-align: center;
    font-weight: 400;

    background: #000000;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;

    border: 0;
    outline: 0;

    :hover {
        outline: 1px solid #FFFFFF;
        background: #212121;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ChatButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 25%;

    color: #000000;
    font-size: 16pt;
    text-align: center;
    font-weight: 600;

    background: #D61E97;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;

    border: 0;
    outline: 0;

    :hover {
        outline: 1px solid #FFFFFF;
        background: #96156A;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const LogoStyle = styled.img`
    margin-bottom: 25px;
    height: 240px;
`;

const FamilyStyle = styled.img`
    position: absolute;
    left: 20px;
    bottom: 20px;
    height: 180px;
`;

const FlagStyle = styled.img`
    position: absolute;
    right: 20px;
    bottom: 20px;
    height: 180px;
`;

const AsaLStyle = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 300px;
`;

const AsaRStyle = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 300px;
`;

const TitleStyle = styled.div`

    color: #FFFFFF;
    font-size: 24pt;
    text-align: center;
    font-weight: 900;
    letter-spacing: 3px;

    height: 90px;

    l {
        color: #c3534f;
    }
    g {
        color: #da8e40;
    }
    b {
        color: #f4db4d;
    }
    t {
        color: #83af36;
    }
    q {
        color: #2993bb;
    }
    i {
        color: #624d8e;
    }
    a {
        color: #bbbbbb;
    }
    m {
        color: #000000;
    }
`;