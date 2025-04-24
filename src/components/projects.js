import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Projects = () => {
    return (
        <Container className="my-3">
            <h1>Projects</h1>
            <Row md={2} className="gy-3 my-3">
                <Col className="d-flex">
                    <Card className="p-3 shadow">
                        <Card.Img src={require('../img/portfolio.png')} />
                        <Card.Body>
                            <Card.Title as="h3">Portfolio Website</Card.Title>
                            <Card.Text>React | Bootstrap | JavaScript</Card.Text>
                            <Card.Text>A website built with React to showcase the projects I have done. It is built with React and decorated with Bootstrap.</Card.Text>
                            <Button>Take a look</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex">
                    <Card className="p-3 shadow">
                        <svg className="bi bi-person-circle" height="20rem" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <Card.Body>
                            <Card.Title as="h3">E-commerce Site</Card.Title>
                            <Card.Text>React | Bootstrap | JavaScript | Node.js | Express.js | PostgreSQL</Card.Text>
                            <Card.Text>An e-commerce website that allows users to register and sign in an account, view available products and add products to the shopping cart. It is a PERN application with a front-end built with React, back-end built with Node.js and Express.js, and backed by a PostgreSQL database.</Card.Text>
                            <Button>Take a look</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex">
                    <Card className="p-3 shadow">
                        <Card.Img src={require('../img/reddit-clone.png')} />
                        <Card.Body>
                            <Card.Title as="h3">Reddit Clone</Card.Title>
                            <Card.Text>React | Redux | CSS | JavaScript</Card.Text>
                            <Card.Text>A simple remake of the popular forum Reddit. This application allows user to browse and search for reddit posts in different subreddit. It is an front-end only application built with React and CSS and uses Redux to handle states.</Card.Text>
                            <Button>Take a look</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;