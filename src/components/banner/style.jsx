import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  /* background-image: ${({ imageUrl }) =>
    `url(https://image.tmdb.org/t/p/original${imageUrl})`}; */
  background: ${({ imageUrl }) =>
    `linear-gradient(to right, rgb(0 0 0/0.8),rgb(0 0 0/0)),url(https://image.tmdb.org/t/p/original${imageUrl})`};
  height: 400px;
  background-size: cover;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  /* justify-content: flex-end; */

  .details-container {
    /* background-color: #00000075; */
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    gap: 8px;

    span {
      color: #ffffff75;
      font-size: 14px;
    }

    button {
      border-radius: 50px;
      border: none;
      padding: 8px;
      width: 60%;
      margin-top: 9px;
      cursor: pointer;
    }
  }
`;
