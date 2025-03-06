// import cards
import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import CardContent from "../cards/CardContent.tsx";
import CardDesc from "../cards/CardDesc.tsx";
import CardImg from "../cards/CardImg.tsx";

export default function Contact(){
    return(
        <>
            <Card>
                <CardTitle>Contact</CardTitle>
                <CardContent>
                    <CardImg src="/linkedin.png" alt="LinkedIn Logo"/>
                    <CardDesc>
                        <p>Check out my LinkedIn here!</p>
                        <p><a href="https://www.linkedin.com/in/elvenz" target="_blank">LinkedIn</a></p>
                    </CardDesc>
                </CardContent>

                <CardContent>
                    <CardImg src="/github.png" alt="GitHub Logo"/>
                    <CardDesc>
                        <p>Check out my Github here!</p>
                        <a href="https://github.com/twelvenz" target="_blank">GitHub</a>
                    </CardDesc>
                </CardContent>
            </Card>
        </>
    )
}