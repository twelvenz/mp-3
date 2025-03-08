// import Cards
import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import CardContent from "../cards/CardContent.tsx";
import CardImg from "../cards/CardImg.tsx";
import CardDesc from "../cards/CardDesc.tsx";
import {useEffect} from "react";

function ExpTitle() {
    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);

    return <></>;
}

export default function Experience() {
    return(
        <>
            <ExpTitle />
            <Card>
                <CardTitle>Experience</CardTitle>

                <CardContent>
                    <CardImg src="/futurem.png" alt="FutureMind NY INC"/>
                    <CardDesc>
                        <h3> FutureMinds NY INC</h3>
                        <h4> Computer Science Tutor </h4>
                        <p> Taught core programming concepts to middle schoolers. </p>
                    </CardDesc>
                </CardContent>

                <CardContent>
                    <CardImg src="/cricket.png" alt="Cricket Wireless"/>
                    <CardDesc>
                        <h3> Cricket Wireless </h3>
                        <h4> Sales Representative </h4>
                        <p> Managed sales, promotions, inventory, and customer service. </p>
                    </CardDesc>
                </CardContent>
            </Card>
        </>
)
}