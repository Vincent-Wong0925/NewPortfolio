import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutPage = () => {
    return (
        <div className="aboutPage min-vh-100">
            <Container className="shadow my-5 p-3">
                <Row>
                    <Col className="p-5">
                        <h1>Hi! My name is Vincent</h1>
                        <p className="mt-5">I am a self-taught full stack developer with a relentless passion for crafting dynamic and innovative web solutions. Through self-driven learning and hands-on experience, I have honed my skills in front-end and back-end technologies, mastering languages like JavaScript, Node.js, React, and PostgreSQL databases. My journey into the world of web development has been defined by a commitment to continuous learning, a knack for problem-solving, and a keen eye for detail. With a strong foundation in building responsive and user-centric applications, I thrive on tackling new challenges and collaborating with like-minded individuals to bring creative visions to life. Explore my projects and let's embark on a journey of digital transformation together!</p>
                    </Col>
                    <Col className="p-5">
                        Placeholder
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage;