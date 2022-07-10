import React from 'react';
import LogoAGITA_NT from '../imgs/Logo_Notext.png';
import AtendenteS from '../imgs/Atendente.png';
import PowerS from '../imgs/Power_Sticker.png';
import styled from 'styled-components';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

export default function Chatbot(props){
    const history = useNavigate();
    
    return(
        <WhoStyle>

            <Header/>

            <LogoStyle src={LogoAGITA_NT} alt="" />

            <MainStyle>
                <ButtonStyle onClick={() => window.open("http://localhost:5000/get")} >DENÚNCIA</ButtonStyle>
                <ButtonStyle onClick={() => window.open("http://localhost:5000/get")}>DÚVIDAS</ButtonStyle>
                <ButtonStyle onClick={() => window.open("http://localhost:5000/get")}>SUGESTÕES</ButtonStyle>
            </MainStyle>

            <PowerStyle src={PowerS} alt="" />

            <AtendenteStyle src={AtendenteS} alt="" />

            {/* <ButtonStyle onClick={() => history("/login")}>Entrar na AGITA</ButtonStyle> */}

        </WhoStyle>
    );
}

const WhoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 0;

    padding-bottom: 20px;
`;

const LogoStyle = styled.img`
    position: fixed;
    margin-top: 100px;
    height: 600px;
    opacity: 10%;
    z-index: -1;    
    
`;

const AtendenteStyle = styled.img`
    position: absolute;
    left: 20px;
    bottom: 0;
    height: 300px;     
`;

const PowerStyle = styled.img`
    position: absolute;
    right: 40px;
    bottom: 40px;
    height: 140px;     
`;

const MainStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;

    background: transparent;
    margin-top: 150px;

    border: 0;
    outline: 0;
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size:  12pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 5px;
    background: #000000;
    height: 50px;
    margin-top: 100px;
    margin-right: 20px;
    margin-left: 20px;

    border: 0;
    outline: 0;

    :hover {
        background: #96156A;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;