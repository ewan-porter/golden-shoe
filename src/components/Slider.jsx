import styled from "styled-components";
import { sliderItems } from "../components/data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../App.css";
import MyButton from './MyButton';

const Container = styled.div`
  height: 80vh;
`;

const Slide = styled.div`
  height: 80vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 900;
  color: #fff;
  padding: 10px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  margin: 0 20%;
  text-align: center;
  padding-bottom: 5%;
`;

const TextContainer = styled.div`
 
`;

const Slider = () => {
  return (
    <Container>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} >
        {sliderItems.map((item) => (
          <Slide key={item.id}
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(230,206,29,0.4) 100%), url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <Image src={item.img} /> */}
            <TextContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <MyButton>MORE INFO</MyButton>
            </TextContainer>
          </Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider;
