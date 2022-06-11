import React from 'react';
import LogoAGITA_NT from '../imgs/Logo_Notext.png';
import RainbowS from '../imgs/Rainbow_Sticker.png';
import styled from 'styled-components';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Login(props){
    const history = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // if(name == "username"){
        //     props.setUserName(value);
        // }
        // setInputs({
        //     'username': name == 'username' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'password': name == 'password' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history("/");
    }
    
    return(
        <LoginStyle>

            <Header/>

            <RainbowLeft src={RainbowS} alt="" />

            <LogoStyle src={LogoAGITA_NT} alt="" />

            <MyForm onSubmit={handleSubmit}>

                <LabelStyle>Nome</LabelStyle>
                
                <InputStyle
                type="text"
                placeholder="seu nome"
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}
                />

                <LabelStyle>Email</LabelStyle>
                
                <InputStyle
                type="text"
                placeholder="seu email"
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}
                />

                <LabelStyle>Senha</LabelStyle>

                <InputStyle
                type="password"
                placeholder="sua senha"
                name="password" 
                value={inputs.password || ""} 
                onChange={handleChange}
                />

                <ButtonStyle 
                type="submit"
                value="Entre na AGITA"
                />

            </MyForm>

            <RainbowRight src={RainbowS} alt="" />

        </LoginStyle>
    );
}

const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 0;

    padding-top: 70px;
    padding-bottom: 20px;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 40%;

    text-indent: 5px;
    font-family: 'Inter', Helvetica, sans-serif;
    font-size:   12pt;
    font-weight: 600px;
    color:  #FFFFFF;
    font-style:  italic;

    padding-top: 5px;
    padding-bottom: 10px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 12pt;
    font-weight: 400px;
    color: #FFFFFF;
    text-indent: 10px;
    
    background: #000000;
    border-radius: 5px;
    border: 1px solid #96156A;
    height: 45px;
    margin-bottom: 10px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #212121;
    } 

    :focus {
        background: #96156A;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Inter', Helvetica, sans-serif;
        font-size: 12pt;
        color: #FFFFFF;
        font-weight: 400px;
        opacity: 80%;
    }
`;

const LogoStyle = styled.img`
    margin-top: 25px;
    height: 240px;
`;

const RainbowLeft = styled.img`
    position: absolute;
    top: 65px;
    left: 0;
    height: 180px;
    transform: rotate(180deg);
`;

const RainbowRight = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 180px;
`;

const ButtonStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size:  12pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 5px;
    background: #96156A;
    height: 45px;
    margin-top: 40px;

    border: 0;
    outline: 0;

    :hover {
        background: #212121;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;
