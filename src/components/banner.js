import React from "react";
import Card from "react-bootstrap/Card";

const Banner = () => {
    return (
        <Card className="bg-black text-white rounded-0 w-100" style={{"height": "32rem"}}>
            <Card.Img className="rounded-0 h-100 opacity-25 object-fit-cover" src={require('../img/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg')} alt="banner image" />
            <Card.ImgOverlay className="d-flex mx-auto" style={{"max-width": "1000px"}}>
                <Card.Body className="align-self-center text-center">
                    <Card.Title className="mb-5" as="h1"><b>Hi, I am <span className="text-info">Vincent Wong</span></b></Card.Title>
                    <Card.Text as="h5">Welcome to my corner of the web! I'm a full-stack developer passionate about crafting seamless user experiences through innovative design and robust functionality. With a blend of front-end finesse and back-end expertise, I specialize in bringing ideas to life in the digital realm. Explore my projects and let's create something extraordinary together!</Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Banner;