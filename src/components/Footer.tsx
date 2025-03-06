import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #494D5F;
    color: #d0bdf4;
    padding: 1.75vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.5vw;

    @media screen and (max-width: 750px){
        height: auto;
        min-height: 8vh;
        padding: 4vw;
        font-size: 3vw;
    }
    
`

export default function Footer() {
    return(
        <StyledFooter>
            <p>All Rights Reserved by Elven Zheng <a href="#"> Credits</a> &copy;</p>
        </StyledFooter>
    )
}