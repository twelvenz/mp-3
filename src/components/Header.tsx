import { styled } from "styled-components";


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 3vh 3vw;
    background-color: #494D5F;
    color: #d0bdf4;
    text-align: left;

    @media screen and (max-width: 750px) {
        align-items: center;
    }
`

const StyledH1 = styled.h1`
    @media screen and (max-width: 750px) {
        font-size: 7vw;
    }

`

const StyledH2 = styled.h2`
    @media screen and (max-width: 750px) {
        font-size: 4vw;
    }

`

export default function Header(  ) {
    return (
        <StyledHeader>
            <StyledH1>Elven Zheng</StyledH1>
            <StyledH2>My Resume</StyledH2>
        </StyledHeader>
    )
}