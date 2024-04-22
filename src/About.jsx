import { Container, Row, Col } from 'react-bootstrap';
import img from './imgs/Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'

const About = () => {
    return(
        <>
            <Container>
                <Row className='py-5'>
                    <Col className='col-3'>
                        <span>Aliquet elit vel nisl commodo</span>
                        <h2>Eget Curabitur Porta Massa Nec Mollis</h2>
                    </Col>
                    <Col className='col-9'>
                        <p>Tincidunt mauris et gravida dui nec consectetur felis vivamus aliquet lectus sit amet augue bibendum ultrices praesent condimentum ultrices justo at commodo vestibulum a hendrerit augue vitae posuere lacus nam placerat congue.</p>
                        <p>Elit quis cursus erat lobortis et ut vehicula velit ante vel ultricies dui porta sit amet morbi at eros suscipit…</p>
                        <div className='mt-4'>
                            <Button variant='primary'>READ MORE</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='flex-wrap'>
                    <div className="col-6">
                        <div className='my-3'>
                            <img src={img.img1} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='my-3'>
                            <img src={img.img2} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='my-3'>
                            <img src={img.img3} alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='my-3'>
                            <img src={img.img4} alt="" className='img-fluid' />
                        </div>
                    </div>
                </Row>
            </Container>  
        </>
    )
}

export default About