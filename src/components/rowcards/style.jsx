import styled from "@emotion/styled";

export const RowCardsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
