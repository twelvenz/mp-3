import {styled} from "styled-components";

const CardImg = styled.img`
    max-width: 100%;
    width: 32%;
    margin: 1vh 1vw;

    @media screen and (max-width: 750px){
        align-self: center;
        width: 30%;
        max-width: 100%;
        margin: 1vh auto;
    }
`

export default CardImg;