import React from 'react';
import LogoAGITA_NT from '../imgs/Logo_Notext.png';
import BilheteP from '../imgs/bilhete.png';
import CamisetaP from '../imgs/camiseta.png';
import CanecaP from '../imgs/caneca-preta.png';
import ShortsP from '../imgs/shorts.png';
import PowerS from '../imgs/Power_Sticker.png';
import styled from 'styled-components';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

export default function Store(props){
    const history = useNavigate();
    
    return(
        <WhoStyle>

            <Header/>

            <LogoStyle src={LogoAGITA_NT} alt="" />

            <MainStyle>
                <ProductStyle src={CanecaP} alt="" />
                <ProductStyle src={CamisetaP} alt="" />
            </MainStyle>

            <MainStyle>
                <ButtonStyle>Comprar (20R$)</ButtonStyle>
                <ButtonStyle>Comprar (45R$)</ButtonStyle>
            </MainStyle>

            <MainStyle>
                <ProductStyle src={ShortsP} alt="" />
                <ProductStyle src={BilheteP} alt="" />
            </MainStyle>

            <MainStyle>
                <ButtonStyle>Comprar (25R$)</ButtonStyle>
                <ButtonStyle>Comprar (30R$)</ButtonStyle>
            </MainStyle>

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

    padding-top: 100px;
`;

const LogoStyle = styled.img`
    position: fixed;
    margin-top: 100px;
    height: 600px;
    opacity: 10%;
    z-index: -1;    
    
`;

const MainStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    background: transparent;
    margin-top: 20px;

    border: 0;
    outline: 0;
`;

const ProductStyle = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

    margin-left: 55px;
    margin-right: 55px;

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
    height: 45px;

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