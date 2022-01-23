import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import {
  AccountDropdownMenuItem,
  AccountMenuText,
  Avatar,
  DropdownButton,
  DropdownHelper,
  DropdownMenu,
  DropdownWrapper,
  NavbarImage,
  NavContainer,
  NetflixLogo,
  PrimaryNavigation,
  SecondaryNavigation,
  SecondaryNavItem,
  StyledNavbar,
} from "./Styles";

export const Navbar = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsOnTop(position < 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledNavbar isOnTop={isOnTop}>
      <NavbarImage src="/assets/nav-shadow.png" alt="" isOnTop={isOnTop} />
      <NavContainer>
        <NetflixLogo href="#">
          <img src="/assets/logo.png" alt="" />
        </NetflixLogo>
        <PrimaryNavigation>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </PrimaryNavigation>
        <SecondaryNavigation>
          <SecondaryNavItem>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </SecondaryNavItem>

          <SecondaryNavItem>
            <DropdownWrapper>
              <DropdownButton>
                <FontAwesomeIcon icon={faBell} />
              </DropdownButton>
              <DropdownHelper>
                <div></div>
              </DropdownHelper>
              <DropdownMenu></DropdownMenu>
            </DropdownWrapper>
          </SecondaryNavItem>

          <SecondaryNavItem>
            <DropdownWrapper>
              <DropdownButton>
                <Avatar src="/assets/avatars/avatar.png" alt=""></Avatar>
                <div></div>
              </DropdownButton>
              <DropdownHelper>
                <div></div>
              </DropdownHelper>
              <DropdownMenu>
                <div>
                  <AccountDropdownMenuItem>
                    <Avatar src="/assets/avatars/avatar01.png" alt=""></Avatar>
                    <AccountMenuText>Sonia La One</AccountMenuText>
                  </AccountDropdownMenuItem>
                  <AccountDropdownMenuItem>
                    <Avatar src="/assets/avatars/avatar02.png" alt=""></Avatar>
                    <AccountMenuText>tati</AccountMenuText>
                  </AccountDropdownMenuItem>
                  <AccountDropdownMenuItem>
                    <Avatar src="/assets/avatars/avatar03.png" alt=""></Avatar>
                    <AccountMenuText>JUANITA 💙</AccountMenuText>
                  </AccountDropdownMenuItem>
                  <AccountDropdownMenuItem>
                    <Avatar src="/assets/avatars/avatar04.png" alt=""></Avatar>
                    <AccountMenuText>Topo</AccountMenuText>
                  </AccountDropdownMenuItem>

                  <AccountMenuText>Manage Profiles</AccountMenuText>
                </div>
                <div>
                  <AccountMenuText>Account</AccountMenuText>
                  <AccountMenuText>Help Center</AccountMenuText>
                  <AccountMenuText>Sign out of Netflix</AccountMenuText>
                </div>
              </DropdownMenu>
            </DropdownWrapper>
          </SecondaryNavItem>
        </SecondaryNavigation>
      </NavContainer>
    </StyledNavbar>
  );
};
