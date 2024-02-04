import React from "react";

import Col from 'react-bootstrap/Col';

import logo from '../../assets/logo.jpeg';
import "./footer.styles.scss";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Footer = () => (
    <div className="footer">
        <hr></hr>

        <div className="txtimg">

            <Row style={{ paddingTop: '0px' }}>
                <Col className="px-4">
                    <p className="footernote">
                        MediCALL® telehealth services provide online medical care for urgent care, mental health, and therapy.</p>
                    <img
                        alt=""
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block "
                    />{' '}
                    <span className="pr-lg">© 2023  MediCALL, Inc. All rights reserved.</span>
                </Col>
                <Col className="d-flex justify-content-end px-4">
                    <Link to='/register'>
                        <Button variant="link" style={{ textDecoration: 'none' }}>Register</Button>
                    </Link>
                    <Link to='/doctors'>
                        <Button variant="link" style={{ textDecoration: 'none' }}>Find Doctor</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    </div>
)

export default Footer;