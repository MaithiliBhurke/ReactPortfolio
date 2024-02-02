import React from 'react'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Container"
import ArrowRightCircle from "react-bootstrap/esm/Container"
import headerImg from "../assets/imgs/header-img.svg"
import { useState, useEffect } from 'react'
// import ticker from 'react-ticker'


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Web Developer", "UI/UX Desginer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let Ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(Ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);


        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }


    }


    return (

        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} className='text'>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Maithili `}<span className='wrap'>{text}</span></h1>
                        <p>lsficef wufjir9 wojviedfjur oivmirugj aijurnsijvf iwnvjfutobmir qj eifeni wifn sii</p>
                        {/* <button onClick={() => console.log('connect')}>
                            Let's connect<ArrowRightCircle size={25} />
                        </button> */}
                        <button onClick={() => console.log('connect')}>
                            Let's connect <i class="fa-solid fa-arrow-right"/>
                        </button>

                    </Col>
                    <Col xs={12} md={6} xl={5} className='right'>
                        <img className='headerimg' src={headerImg} alt='Header Img' />
                    </Col>

                </Row>
            </Container>

        </section>

    )
}

export default Banner
