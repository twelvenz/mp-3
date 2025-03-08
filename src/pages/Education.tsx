// import Cards
import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import CardContent from "../cards/CardContent.tsx";
import CardImg from "../cards/CardImg.tsx";
import CardDesc from "../cards/CardDesc.tsx";
import {useEffect} from "react";

function EduTitle() {
    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return <></>;
}

export default function Education(){
    return(
        <>
            <EduTitle />
            <Card>
                <CardTitle>Education</CardTitle>
                <CardContent>
                    <CardImg src="/bu_img.png" alt="Boston University"/>
                    <CardDesc>
                        <h3>Boston University</h3>
                        <p>B.A. in Computer Science</p>
                        <p>Boston, MA. 2023 - 2027</p>
                    </CardDesc>
                </CardContent>
                <CardContent>
                    <CardImg src="/siths.png" alt="Staten Island Technical High School"/>
                    <CardDesc>
                        <h3>Staten Island Technical High School</h3>
                        <p>High School Diploma</p>
                        <p>Staten Island, NY. 2019 - 2023</p>
                    </CardDesc>
                </CardContent>
            </Card>
        </>
    )
}