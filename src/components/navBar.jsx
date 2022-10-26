import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Directory = styled.header`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3vh;
    max-height: 5vh;

`;

const linkStyle = {
    margin: "3%",
    fontSize: "calc(5px + 2vh)",
    textDecoration: "none",
    fontWeight: "bold",
    color: 'darkturquoise'
  };



export default function NavBar() {
    
    return (
        <Directory>
            <Link to = "/" style={linkStyle}>Wall</Link>
            <Link to = "/create" style={linkStyle}>Create</Link>
            <Link to = "/info" style={linkStyle}>Info</Link>
        </Directory>
    );
}

