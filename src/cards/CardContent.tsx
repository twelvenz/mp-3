import {styled} from "styled-components";

const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 750px){
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

`

export default CardContent;