import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Container"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/imgs/meter1.svg";
import meter2 from "../assets/imgs/meter2.svg";
import meter3 from "../assets/imgs/meter3.svg";
import colorSharp from "../assets/imgs/color-sharp.png";


function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem is simply dummy text of the printing and typesetting industry
                                <br/>Lorem is simply dummy text of the printing and typesetting industry
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='Image1'/>
                                    <h5>Web Development</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter2} alt='Image2'/>
                                    <h5>Brand Identity</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter3} alt='Image3'/>
                                    <h5>Logo Design</h5>
                                </div>

                                <div className='item'>
                                    <img src={meter1} alt='Image4'/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' alt='img5' src={colorSharp} />

        </section>
    )
}

export default Skills
