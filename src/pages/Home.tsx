import React from "react"
import { Link } from "react-router-dom"


const Home: React.FC = () => {

    return(
        <>
            <h1> Você está na HOME </h1>
            <Link to="/about">Ir para About</Link>
        </>
    )
}

export default Home