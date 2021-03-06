import React from "react";
import LogoAGITA_NT from '../imgs/Logo_Notext.png';
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const HeaderHome=(props) => {

    const location = useLocation();
    const history = useNavigate();

    function LogoutFunction() {
      history("/")
      axios({
        method: "POST",
        url:"http://127.0.0.1:5000/logout",
      })
      .then((response) => {
         console.log(response.data)
         props.token()
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })}
    
        return (
            <Box>
                <LogoStyle src={LogoAGITA_NT} alt="" onClick={() => history("/")}/>
                <MenuStyle>
                    <ButtonStyle onClick={() => history("/home")}>Página Inicial</ButtonStyle>
                    <ButtonStyle onClick={() => history("/quemsomos")}>Quem Somos</ButtonStyle>
                    <ButtonStyle onClick={() => history("/converse")}>Converse Conosco</ButtonStyle>
                    <ButtonStyle onClick={() => history("/loja")}>Loja</ButtonStyle>
                </MenuStyle>
                {/* <LoginStyle onClick={() => history("/login")}>Entre na AGITA</LoginStyle> */}
                <LogoutStyle onClick={LogoutFunction}>Login/Logout</LogoutStyle>
            </Box>
    );
};

export default HeaderHome;

export const Box = styled.div`
    position: fixed;
    display: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0 !important;
    height: 70px;
    width: 100%;
    min-width: 360px;
    background: #000000;
    flex-direction: row;
    bottom: 0;
    padding-left: 10%;
    padding-right: 7%;
    padding-top: 10px;
    z-index: 1;
`;

const LogoStyle = styled.img`
    position: fixed;
    left: 5%;
    height: 55px;
`;

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 15%;
    margin-top: 5px;
    height: 40px;
    width: 50%;
`;

const LoginStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 73%;
    margin-top: 5px;
    height: 40px;
    width: 10%;

    background: #96156A;
    border-radius: 5px;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 10pt;
    font-weight: 600;
    font-style: italic;
    color: #FFFFFF;

    :hover {
        background: #212121;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const LogoutStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 75%;
    margin-top: 5px;
    height: 40px;
    width: 15%;

    background: #212121;
    border-radius: 5px;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 10pt;
    font-weight: 600;
    font-style: italic;
    color: #FFFFFF;

    :hover {
        background: #000000;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;

    background: transparent;
    border-radius: 5px;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 10pt;
    font-weight: 900;
    color: #FFFFFF;

    :hover {
        color: #96156A;
        background: #212121;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;