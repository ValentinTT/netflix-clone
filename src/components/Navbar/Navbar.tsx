import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "styles/Breakpoints";

const NavbarImage = styled.img<{ isOnTop: boolean }>`
  width: 400%;
  margin-left: -200%;
  height: 100%;
  transform: rotate(180deg);
  opacity: ${(props) => (props.isOnTop ? "1" : "0")};
  transition: opacity 10s;
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
    props.isOnTop
      ? "transparent"
      : "linear-gradient(0deg, #141414 0%, #141414 100%)"};
  transition: background-color 10s;
  transition-delay: 0.15s;
  z-index: 100;
  display: flex;
  align-items: center;
  & > div {
    z-index: 110;
    display: flex;
    width: 94%;
    max-height: 68px;
    overflow-y: hidden;
    margin: 0 auto;
    & > a {
      & > img {
        width: 4rem;
        ${device.sm`width: 5rem`};
        ${device.md`width: 7.2rem`};
        margin-right: 1.125rem;
      }
    }
    & > ul {
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
    }
  }
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
      <div>
        <a href="#">
          <img src="/assets/logo.png" alt="" />
        </a>
        <ul>
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
        </ul>
      </div>
    </StyledNavbar>
  );
};
