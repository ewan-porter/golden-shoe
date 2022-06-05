import styled from "styled-components";
import { categories } from "./data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  background-color: #1f1f1f;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;



const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;