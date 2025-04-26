import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer>
            <Container className="p-4 mt-3 bg-dark text-white" fluid>
                <Row xs={1} md={3} className="gy-5">
                    <Col>
                        <h2>Vincent Wong</h2>
                    </Col>
                    <Col>
                        <h3>Useful Links</h3>
                        <Link className="my-2 text-reset text-decoration-none d-block" to="/">Home</Link>
                        <Link className="my-2 text-reset text-decoration-none d-block" to="/about">About</Link>
                        <Link className="my-2 text-reset text-decoration-none d-block" to="/contact">Contact</Link>
                    </Col>
                    <Col>
                        <h3>Contact Me</h3>
                        <p>Email: vincent.wco@gmail.com</p>
                        <p>Github: github.com/Vincent-Wong0925</p>
                        <p>LinkedIn: www.linkedin.com/in/vincent-wong-a90b6b262</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;