import styled from "styled-components";
import { products } from "./data";
import Product from "./Product";

const BgContainer = styled.div`
margin-top: 20px;
  background-color: #1f1f1f;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;
const Title = styled.h1`
  font-weight: 900;
  padding-top: 20px;
  color: #fff
`;

const Products = () => {
  return (
    <BgContainer>
      <Title>Latest Releases</Title>
      <Container>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </BgContainer>
  );
};

export default Products;
