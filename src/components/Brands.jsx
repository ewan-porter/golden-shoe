import styled from "styled-components";
import { brands } from "./data";
import { mobile } from "../responsive";
import BrandItem from "./BrandLogo";

import MyButton from "./MyButton";

const Container = styled.div`
  display: flex;
  padding: 20px 100px;
  justify-content: center;
  flex-wrap: wrap;
  ${mobile({ padding: "0px" })}
`;

const Title = styled.h1`
  font-weight: 900;
  padding-top: 20px;
  color: #1f1f1f;
`;

const Brands = () => {
  return (
    <>
      <Title>Brands</Title>
      <Container>
        {brands.map((item) => (
          <BrandItem item={item} key={item.id} />
        ))}
      </Container>
      <MyButton variant="contained">See All</MyButton>
    </>
  );
};

export default Brands;
