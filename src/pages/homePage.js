import React from "react";
import Banner from "../components/banner";
import Skills from "../components/skills";
import Projects from "../components/projects";

const HomePage = () => {
    return (
        <div className="homePage min-vh-100">
            <Banner />
            <Skills />
            <Projects />
        </div>
    )
}

export default HomePage;