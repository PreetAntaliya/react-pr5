
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'

const Banner = () => {
    return (
        <div className='banner white_color'>
            <Container>
                <div className='banner_content'>
                    <span>Purus Donec Mi Tellus Suscipit Eget</span>
                    <h1 className='pt-3 pb-4'>Urna A Egestas Etiam</h1>
                    <p className='pb-3'>Lacinia velit at ipsum commodo tincidunt donec condimentum ligula ultricies dictum.</p>
                    <div className='pt-5'>
                        <Button variant="outline-light" className='me-4'>ULLAMCORPER</Button>
                        <Button variant="primary">ACCUMSAN</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banner;
