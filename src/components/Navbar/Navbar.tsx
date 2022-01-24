import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import {
  AccountDropdownMenuAvatarsContainer,
  AccountDropdownMenuItem,
  AccountDropdownMenuOptionsContainer,
  AccountMenuText,
  Avatar,
  DropdownButton,
  DropdownHelper,
  DropdownMenu,
  DropdownWrapper,
  NavbarImage,
  NavContainer,
  NetflixLogo,
  NewsContainer,
  NewsDropdownMenuItem,
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
              <DropdownMenu>
                <NewsContainer>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642989852/netflix-clone/news00.png"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>Netflix Lookahead</h1>
                        <h2>Explore what's coming soon.</h2>
                        <p>1 day ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642980941/netflix-clone/news01.png"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>New Arrival</h1>
                        <h2>The Hangover Part III</h2>
                        <p>3 days ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642980941/netflix-clone/news02.png"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>New Arrival</h1>
                        <h2>More The Merrier</h2>
                        <p>5 days ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642980941/netflix-clone/news03.png"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>Netflix Original</h1>
                        <h2>The Unforgivable</h2>
                        <p>6 days ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642980941/netflix-clone/news04.png"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>Netflix Original</h1>
                        <h2>Money Heist</h2>
                        <p>1 week ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                  <NewsDropdownMenuItem>
                    <a href="#">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dzlmilfku/image/upload/v1642989852/netflix-clone/news05.jpg"
                          alt=""
                        />
                      </div>
                      <main>
                        <h1>New Arrival</h1>
                        <h2>The Royal Treatment</h2>
                        <p>1 week ago</p>
                      </main>
                    </a>
                  </NewsDropdownMenuItem>
                </NewsContainer>
              </DropdownMenu>
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
                <AccountDropdownMenuAvatarsContainer>
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
                </AccountDropdownMenuAvatarsContainer>
                <AccountDropdownMenuOptionsContainer>
                  <AccountMenuText>Account</AccountMenuText>
                  <AccountMenuText>Help Center</AccountMenuText>
                  <AccountMenuText>Sign out of Netflix</AccountMenuText>
                </AccountDropdownMenuOptionsContainer>
              </DropdownMenu>
            </DropdownWrapper>
          </SecondaryNavItem>
        </SecondaryNavigation>
      </NavContainer>
    </StyledNavbar>
  );
};
