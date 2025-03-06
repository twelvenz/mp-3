import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
    width: 25%;

    @media screen and (max-width: 750px){
        width: 100%;
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #8458B3;
    text-align: center;
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 750px){
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }
`

const StyledLi = styled.li`
    font-size: 2.5vw;
    width: 80%;
    background-color: #d0bdf4;
    padding: 1.5vh 0;
    margin: 4vh auto;

    @media screen and (max-width: 750px){
        max-width: 30%;
        font-size: 3.5vw;
        padding: 1% .5%;
        margin: 2% 1.5%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={`/`}>Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/education`}>Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/certifications`}>Certifications</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/experience`}>Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/projects`}>Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/contact`}>Contact Me</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>

    )
}