import styled from "@emotion/styled";

export const RowCardsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 16px;
  }
`;
