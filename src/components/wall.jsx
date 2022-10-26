import React from 'react';
import styled from 'styled-components';
import {ethers} from 'ethers';

const Body = styled.body`
background-image: linear-gradient(black, gray, white);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

`;

export default function Wall() {
    
    return (
        <Body>
            <h1>HomePage</h1>
        </Body>
    );
}

