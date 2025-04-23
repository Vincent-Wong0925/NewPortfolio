import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";


const Skills = () => {
    return (
        <Container className="my-3">
            <h1>Skills</h1>
            <Row md={4}>
                <Col>
                    <Card className="shadow">
                        <Card.Body className="p-2">
                            <FontAwesomeIcon className="text-info mx-3 d-inline-block" size="2x" icon={faReact} />
                            <Card.Title className="d-inline-block m-0">React JS</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow">
                        <Card.Body className="d-flex p-2 align-items-center">
                            <svg className="d-inline-block mx-3" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
                                <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                                <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                                <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
                                <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
                            </svg>
                            <Card.Title className="d-inline-block m-0">HTML</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;