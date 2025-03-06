import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router";
import styled from "styled-components";
// component imports
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// page imports
import Certifications from "./pages/Certifications.tsx";
import Contact from "./pages/Contact";
import Education from "./pages/Education.tsx";
import Experience from "./pages/Experience.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    
`

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 750px){
        width: 100%;
        height: 100vh;
        flex-direction: column;
    }
`

function Root(){
    return(
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </ContentWrapper>
            <Footer/>
        </PageWrapper>
    )

}


const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}
