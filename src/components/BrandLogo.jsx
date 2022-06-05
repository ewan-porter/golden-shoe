import styled from "styled-components";
import { mobile } from "../responsive";

import 'hover.css';


const Container = styled.div`
  flex: 1;
  margin: 3px;

  position: relative;
`;

const Image = styled.img`
  max-width: 150px;
  width:auto;
  height: 100%;
  object-fit: contain;
  
  ${mobile({ height: "20vh" })}
  

  
`;






const BrandLogo = ({ item }) => {
  return (
    <Container>
        <a href="#">
      <Image className="hvr-grow" src={item.img} />
      </a>
    </Container>
  );
};

export default BrandLogo;