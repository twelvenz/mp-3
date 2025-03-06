import { styled } from 'styled-components';

const CardDesc = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    margin: 0 auto;
    justify-content: center;
    font-size: 1.8vw;

    @media screen and (max-width: 750px){
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 2.5vw;
        text-align: center;
    }
`

export default CardDesc;