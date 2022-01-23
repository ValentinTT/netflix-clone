import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "styles/Breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
`;

const AccountMenuText = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-family: NetflixSansRegular;
  font-weight: 500;
  width: 10rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  & > div {
    width: 0;
    height: 0;
    margin-left: 0.7rem;
    border-style: solid;
    border-width: 0.3rem 0.3rem 0 0.3rem;
    border-color: #fff transparent transparent transparent;
    transition: transform 0.35s;
  }
`;

const AccountDropdownMenuItem = styled.div`
  margin: 10px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > ${AccountMenuText} {
    margin-left: 0.5rem;
  }
  &:hover > p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const DropdownMenu = styled.div`
  visibility: hidden;
  position: absolute;
  right: 0;
  top: 160%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #3a3a3a;
  & > div:first-child {
    padding: 0.3rem 0.6rem 0.15rem 0.6rem;
    & > ${AccountMenuText} {
      margin: 10px 5px;
    }
  }
  & > div:last-child {
    padding: 0.15rem 0.6rem 0.3rem 0.6rem;
    border-top: 1px solid #3a3a3a;
    & > ${AccountMenuText} {
      font-family: NetflixSansMedium;
      margin: 10px 5px;
    }
  }
`;

const DropdownHelper = styled.div`
  visibility: hidden;
  position: absolute;
  top: 90%;
  width: 100%;
  height: 70%;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  & > div {
    // Arrow
    width: 0;
    height: 0;
    margin-left: 0.3rem;
    border-style: solid;
    border-width: 0 0.3rem 0.3rem 0.3rem;
    border-color: transparent transparent #fff transparent;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  &:hover {
    & > ${DropdownMenu}, & > ${DropdownHelper} {
      visibility: visible;
    }

    & > ${DropdownButton} {
      & > div {
        transform: rotate(180deg);
      }
    }
  }
`;

const SecondaryNavItem = styled.div`
  margin-right: 1.5rem;
  color: white;
  & > div {
    font-size: 1.4rem;
  }
`;

const SecondaryNavigation = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PrimaryNavigation = styled.ul`
  display: flex;
  align-items: center;
  & > li {
    height: fit-content;
    list-style-type: none;
    margin-left: 1rem;
    & > a {
      text-decoration: none;
      color: #e5e5e5;
      font-size: 0.5rem;
      ${device.sm`font-size: 0.9rem`};
      ${device.md`font-size: .9rem`};
      font-family: NetflixSansRegular;
      &:hover {
        color: #b2b2b2;
      }
    }
    & > a.active {
      font-weight: bold;
      &:hover {
        cursor: default;
        color: #e5e5e5;
      }
    }
  }
`;

const NetflixLogo = styled.a`
  & > img {
    width: 4rem;
    ${device.sm`width: 5rem`};
    ${device.md`width: 7.2rem`};
    margin-right: 1.125rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  z-index: 110;
  width: 94%;
  max-height: 68px;
  margin: 0 auto;
`;

const NavbarImage = styled.img<{ isOnTop: boolean }>`
  width: 400%;
  margin-left: -200%;
  height: 100%;
  transform: rotate(180deg);
  //opacity: ${(props) => (props.isOnTop ? "1" : "0")};
  transition: opacity 0.75s;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledNavbar = styled.nav<{ isOnTop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0;
  margin: 0;
  background: ${(props) =>
    props.isOnTop ? " rgba(20, 20, 20, 0.005)" : "#141414"};
  transition: background-color 0.5s;
  transition-delay: 0.1s;
  z-index: 100;
  display: flex;
  align-items: center;
`;

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
