import {styled} from "styled-components";

const Card = styled.main`
    display: flex;
    flex-direction: column;
    width:75%;
    background-color: #d0bdf4;
    margin: 0 auto;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
    }
`

export default Card;