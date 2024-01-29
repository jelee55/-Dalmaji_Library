import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";

const ImageSlide = () => {
    return (
        <Carousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <Carousel.Inner>
                <Carousel.Item>
                    <img src="/images/main/MainImg01.png" className="d-block w-100" alt="MainImg01" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/main/MainImg02.png" className="d-block w-100" alt="MainImg02" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/main/MainImg03.png" className="d-block w-100" alt="MainImg03" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/main/MainImg04.png" className="d-block w-100" alt="MainImg04" />
                </Carousel.Item>
            </Carousel.Inner>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Carousel>
    );
};

export default ImageSlide;