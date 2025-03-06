// import cards
import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import CardContent from "../cards/CardContent.tsx";
import CardImg from "../cards/CardImg.tsx";
import CardDesc from "../cards/CardDesc.tsx";

export default function Certifications(){
    return (
        <>
            <Card>
                <CardTitle>Certifications</CardTitle>
                <CardContent>
                    <CardImg src="/codepath.jpg" alt="Codepath"/>
                    <CardDesc>
                        <h3>CodePath WEB101</h3>
                    </CardDesc>
                </CardContent>

                <CardContent>
                    <CardImg src="/autocad.png" alt="AutoCAD"/>
                    <CardDesc>
                        <h3>AutoCAD</h3>
                    </CardDesc>
                </CardContent>
            </Card>

        </>
    )
}