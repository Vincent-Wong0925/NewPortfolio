import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AboutPage = () => {
    return (
        <div className="aboutPage min-vh-100">
            <Container className="shadow my-5 p-3">
                <Row md={2}>
                    <Col className="p-5">
                        <h1>Hi! My name is Vincent</h1>
                        <p className="mt-5">I am a self-taught full stack developer with a relentless passion for crafting dynamic and innovative web solutions. Through self-driven learning and hands-on experience, I have honed my skills in front-end and back-end technologies, mastering languages like JavaScript, Node.js, React, and PostgreSQL databases. My journey into the world of web development has been defined by a commitment to continuous learning, a knack for problem-solving, and a keen eye for detail. With a strong foundation in building responsive and user-centric applications, I thrive on tackling new challenges and collaborating with like-minded individuals to bring creative visions to life. Explore my projects and let's embark on a journey of digital transformation together!</p>
                    </Col>
                    <Col className="p-5">
                        <Image className="object-fit-cover" height="400" width="400" src={require('../img/IMG_9620.jpg')} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage;