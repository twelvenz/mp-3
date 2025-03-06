import {styled} from "styled-components";

const CardTitle = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: 2.75vw;
    color: black;
    
    @media screen and (max-width: 750px) {
        text-align: center;
        font-size: 5vw;
    }
`
export default CardTitle;