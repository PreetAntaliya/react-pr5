
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'

const Section = () => {
    return (
        <div className='mt-5 section white_color'>
            <Container>
                <div className='section_content text-center'>
                    <h2 className=''>Venenatis Nisl Porta</h2>
                    <p className='pb-3'>Lorem vestibulum gravida ipsum non velit aliquam lobortis</p>
                    <div className=''>
                        <Button variant="primary">Read More</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Section;
