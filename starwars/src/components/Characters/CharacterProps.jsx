import React from "react";
import styled from "styled-components";

const CharWrapper = styled.div`
width: 50%;
margin: 10px 0 10px 25%;

border: 1px solid #212530;
border-radius: 0.7rem;
box-shadow: 3px 3px #7d95c9;

background-color: #debfaf;

opacity: 0.6;
`;

const ParaWrapper = styled.p`
font-size: 1.4rem;
font-weight: bold;
color: #302925;

`;

//create props const
const CharacterProps = (props) => {
    return (
        <CharWrapper>
            <ParaWrapper className="name">{props.name}</ParaWrapper>
            <ParaWrapper className="dob">Birth Year: {props.dob}</ParaWrapper>
        </CharWrapper>
    )
}
//Export comp
export default CharacterProps;