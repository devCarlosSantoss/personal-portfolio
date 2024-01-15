import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from 'react'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FullStack Developer", "Java Developer", "Quality Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col>
            <span className="tagLine">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Carlos `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              tenetur sunt dolorem accusantium, vero doloremque est fuga soluta
              beatae illum earum eum, maiores atque explicabo eaque ipsa!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col>
            <img className="banner-img" src={process.env.PUBLIC_URL + "/img/header-img.svg"} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
