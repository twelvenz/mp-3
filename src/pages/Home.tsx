import { styled } from "styled-components";
import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import CardContent from "../cards/CardContent.tsx";
import CardDesc from "../cards/CardDesc.tsx";
import {useEffect} from "react";

const PortraitImg = styled.div`
    max-width: 100%;
    width: 40%;
    margin: 1vh 1vw;

    @media screen and (max-width: 750px){
        margin: 1vh auto;
        width: 50%;
    }
`

function HomeTitle() {
    useEffect(() => {
        document.title = "My Resume - Home";
    }, []);
    return <></>
}


export default function Home() {
    return(
        <>
            <HomeTitle/>
            <Card>
                <CardTitle>Home</CardTitle>
                <CardContent>
                    <PortraitImg>
                        <img src="/profile.jpg" alt="Portrait of Elven Zheng"/>
                    </PortraitImg>
                    <CardDesc>
                        <h3> My name is Elven Zheng.</h3>
                        <p> I am a second year CS major at Boston University.</p>
                        <p>I aspire to be a software engineer.</p>
                        <p> Welcome to my resume website!</p>
                    </CardDesc>
                </CardContent>
            </Card>
        </>
    )
}