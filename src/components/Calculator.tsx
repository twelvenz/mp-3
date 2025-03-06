import { useState } from "react";
import styled from "styled-components";

const CalcDiv = styled.div`
    max-width: 60%;
    margin: 3vw auto;
    padding: 3vw;
    border-radius: 1vw;
    background: url("/chip.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 750px){
        max-width: 75%;
        margin: 2vw auto;
        padding: 4vw;
        border-radius: 2vw;
    }
`

const ProjectTitle = styled.h3`
    text-align: center;
    font-size: 2vw;
    background-color: #d0bdf4;
    padding: 1.5vw;
    border-radius: 1vw;

    @media screen and (max-width: 750px){
        font-size: 4vw;
        padding: 4vw;
        border-radius: 2vw;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1vw;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 750px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2vw;
        width: 100%;
    }
`

const StyledBtn = styled.button`
    padding: 1vh 1.25vw;
    font-size: 1.5vw;
    background: #d0bdf4;
    border: none;
    border-radius: 2vw;

    @media screen and (max-width: 750px){
        flex: 20%;
        padding: 1vh 1vw;
        font-size: 3vw;
        background: #d0bdf4;
        border-radius: 4vw;
        margin: 1vw;
    }
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 750px){
        width: 75%;
        margin: 4vw auto;
    }
`

const StyledInput = styled.input`
    padding: 1vw;
    margin: 2vw;
    box-sizing: border-box;
    font-size: 1.5vw;

    @media screen and (max-width: 750px){
        padding: 2.5vw;
        margin: 3vw;
        font-size: 2.5vw;
    }
`

const StyledOutput = styled.output`
    text-align: center;
    font-size: 1.5vw;
    margin: 1vw;
    background: white;
    padding: 1.5vw;
    border-radius: 1vw;
    width: 75%;

    @media screen and (max-width: 750px){
        font-size: 3vw;
        padding: 4vw;
        border-radius: 2vw;
        width: 90%;
    }
`

export default function Calculator() {
    // set fields
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [output, setOutput] = useState(0);

    // calculator logic
    const add = () => {
        setOutput(first + second);
    };

    const sub = () => {
        setOutput(first - second);
    };

    const mul = () => {
        setOutput(first * second);
    };

    const div = () => {
        setOutput(first / second);
    };

    const power = () => {
        if (second < 0) {
            let result = 1;
            for (let i = 0; i < second * -1; i++) {
                result *= first;
            }
            setOutput(1 / result);
        } else {
            let result = 1;
            for (let i = 0; i < second; i++) {
                result *= first;
            }
            setOutput(result);
        }
    };

    const clear = () => {
        setFirst(0);
        setSecond(0);
        setOutput(0);
    };


    return(
        <CalcDiv>

            <ProjectTitle>Fast Calculator</ProjectTitle>

            <InputDiv>
                <StyledInput
                    type="number"
                    placeholder="First Number"
                    value={first}
                    onChange={(e) => setFirst(Number(e.target.value))}
                />
                <StyledInput
                    type="number"
                    placeholder="Second Number"
                    value={second}
                    onChange={(e) => setSecond(Number(e.target.value))}
                />
            </InputDiv>

            <ButtonDiv>
                <StyledBtn onClick={add}>+</StyledBtn>
                <StyledBtn onClick={sub}>-</StyledBtn>
                <StyledBtn onClick={mul}>*</StyledBtn>
                <StyledBtn onClick={div}>/</StyledBtn>
                <StyledBtn onClick={power}>^</StyledBtn>
                <StyledBtn onClick={clear}>Clear</StyledBtn>
            </ButtonDiv>

            <StyledOutput style={{ color: output < 0 ? 'red' : 'black' }}> {output} </StyledOutput>

        </CalcDiv>
    )

}