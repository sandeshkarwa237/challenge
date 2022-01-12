import styled from "styled-components";

const BadgeType = styled.span`
  background-color: ${(props) => (props.isSale ? "red" : "green")}; ;
`;

export { BadgeType };
