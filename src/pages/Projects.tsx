import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import Calculator from "../components/Calculator";

export default function Projects() {
    return(
        <>
            <Card>
                <CardTitle>Projects</CardTitle>
                <Calculator />
            </Card>
        </>
    )
}