import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const Footer = () => {
    return (
        <footer expand="lg" className="bg-body-tertiary py-5 mt-5">
            <Container>
                <Row>
                    <Col xs={12} md={4} className='text-center'>
                        <span className="footer-title mb-2 d-inline-block">Company</span>
                        <ul className="list-unstyled text-center">
                            <li className="">
                                <a className="" href="#">About Us</a>
                            </li>
                            <li className="">
                                <a className="" href="#">News and articles</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Plans & Prices</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Job postings</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className='text-center'>
                        <ul className="list-unstyled text-center">
                            <li className="">
                                <span className="footer-title mb-2 d-inline-block">Product</span>
                            </li>
                            <li className="">
                                <a className="" href="#">Product</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Product Details</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Plans & Prices</a>
                            </li>
                            <li className="">
                                <a className="" href="#">FAQ</a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className='text-center'>
                        <span className="footer-title mb-2 d-inline-block">Contact & Support</span>
                        <ul className="list-unstyled text-center">
                            <li className="">
                                <a className="" href="#">+91 957438-87587</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Contact Us</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Live chat</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Feedback</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className='d-flex justify-content-evenly mt-5'>
                    <div>
                        <p>Copyright © 2024 - All Rights Reserved - Domain Name</p>
                    </div>
                    <div>
                        <p>Template by OS Templates</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;