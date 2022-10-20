import Carrusel from "../components/carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeProducts from "../components/homeProducts";
import { Row, Col, Container } from 'react-bootstrap'
import ferrum from '../images/ferrum.png';
import delta from '../images/delta.png';
import logoips from '../images/logo_ips.png';
import logonegativo from '../images/Logo-Negativo.png';
import '../index.css';


const Home = () => {
    return(
     
            <div>
                <Carrusel />
                <Container>
                <h5 className="text">Productos destacados</h5>
                    <HomeProducts />
                </Container>
                <hr className="espacioGris" />
                <Container>
                    <h4 className="text"><b>Marcas con las que trabajamos</b></h4>
                    <Row>
                        <Col md={4}> <img src={ferrum} alt="Ikea" className="ads" /> </Col>
                        <Col md={4}> <img src={delta} alt="Ikea" className="ads" /> </Col>
                        <Col md={3}> <img src={logonegativo} alt="Ikea" className="ads" /> </Col>
                        <Col md={1}> <img src={logoips} alt="Ikea" className="ads" /> </Col>
                    </Row>
                </Container>
            </div>
        );
    }

export default Home;