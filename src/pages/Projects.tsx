import Card from "../cards/Card.tsx";
import CardTitle from "../cards/CardTitle.tsx";
import Calculator from "../components/Calculator";
import {useEffect} from "react";

function ProjectTitle() {
    useEffect(() => {
        document.title = "My Resume - Projects";
    }, []);

    return <></>;
}

export default function Projects() {
    return(
        <>
            <ProjectTitle />
            <Card>
                <CardTitle>Projects</CardTitle>
                <Calculator />
            </Card>
        </>
    )
}