import styled from "@emotion/styled";

export const CardContainer = styled.div`
  min-width: ${({ variant }) =>
    variant === "large" ? "250px" : variant === "medium" ? "200px" : "200px"};
  height: ${({ variant }) =>
    variant === "large" ? "300px" : variant === "medium" ? "250px" : "250px"};
  border-radius: 16px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
