import React from "react";
import { StyledNav, StyledNavLink } from "./style";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Movies",
    to: "movies",
  },
  {
    name: "Shows",
    to: "shows",
  },
];

const Navbar = () => {
  return (
    <StyledNav>
      <h1>
        <i>
          FILM <span className="text-light">ECSTASY</span>
        </i>
      </h1>
      <div className="links-container">
        {links.map((item) => (
          <StyledNavLink key={item.name} to={item.to}>
            {item.name}
          </StyledNavLink>
        ))}
      </div>
      <img
        src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
        alt="user"
      />
    </StyledNav>
  );
};

export default Navbar;
