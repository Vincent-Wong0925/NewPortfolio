import React from "react";
import Banner from "../components/banner";
import Skills from "../components/skills";

const HomePage = () => {
    return (
        <div className="homePage min-vh-100">
            <Banner />
            <Skills />
        </div>
    )
}

export default HomePage;