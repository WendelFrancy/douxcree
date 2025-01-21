import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const TestarRota = styled.div`
    height: 100rem;
    width: 100rem;
    background-color: black;
`;

const About: React.FC = () => {

    return (
        <>
            <TestarRota>
                <h1> Você está em About </h1>
                <Link to="/home">Ir pra home</Link>
                <Link to="/">Ir para Landing Page</Link>
            </TestarRota>
        </>
    )
}

export default About