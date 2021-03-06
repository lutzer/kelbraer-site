import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"

export default function Success() {
    const Container = styled.header`
        width: 200px;
        overflow: hidden;
    
    > img {
        width: 100px;
        position: absolute;
        left: 47%;
        top: 620px;
        }
    `

    const Lip = styled(motion.div)`
        width: 10vw;
        height: 10vh;
        position: absolute; 
        bottom: -100px;
        left: 42vw;
        background: url("./lip.png") no-repeat;
        background-size: contain;
    `


    return (
        <Container>
            <img src="./envelope.png"/>
            <Lip animate={{y: "-950px", x:"10vw"}} transition={{ duration:4, repeat: "Infinity", repeatDelay: 20, delay: 2}}></Lip>
        </Container>
    )
}
