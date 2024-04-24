import { Container, Row, Col } from 'react-bootstrap';
import img from './imgs/Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'

const Blog = () => {
    return (
        <div className="pt-5">
            <Container>
                <Row className='py-5'>
                    <Col className='col-12 text-center'>
                        <h3>Nulla Pretium Nulla Ligula</h3>
                        <p>Placerat ut tincidunt eget varius quis erat quisque euismod</p>
                    </Col>
                </Row>
                <Row className='flex-wrap'>
                    <div className="col-4">
                        <div className='my-3'>
                            <img src={img.img7} alt="" className='img-fluid w-100' />
                        </div>
                        <div>
                            <h4>Ligula Id Metus Faucibus</h4>
                            <span><b>Admin | Tag Name</b></span>
                        </div>
                        <div>
                            <p>Malesuada donec eu ex placerat accumsan felis quis auctor sem aliquam ut lacus laoreet placerat augue ornare pharetra…</p>
                        </div>
                        <div>
                            <Button variant='primary'>READ MORE</Button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='my-3'>
                            <img src={img.img8} alt="" className='img-fluid w-100' />
                        </div>
                        <div>
                            <h4>Ligula Id Metus Faucibus</h4>
                            <span><b>Admin | Tag Name</b></span>
                        </div>
                        <div>
                            <p>Malesuada donec eu ex placerat accumsan felis quis auctor sem aliquam ut lacus laoreet placerat augue ornare pharetra…</p>
                        </div>
                        <div>
                            <Button variant='primary'>READ MORE</Button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='my-3'>
                            <img src={img.img9} alt="" className='img-fluid w-100' />
                        </div>
                        <div>
                            <h4>Ligula Id Metus Faucibus</h4>
                            <span><b>Admin | Tag Name</b></span>
                        </div>
                        <div>
                            <p>Malesuada donec eu ex placerat accumsan felis quis auctor sem aliquam ut lacus laoreet placerat augue ornare pharetra…</p>
                        </div>
                        <div>
                            <Button variant='primary'>READ MORE</Button>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Blog