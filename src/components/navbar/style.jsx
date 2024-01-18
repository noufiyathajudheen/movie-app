import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);

  .text-light {
    color: #ffffff75;
  }

  .links-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff75;
  padding: 2px 0px;

  &.active {
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
  }
`;
