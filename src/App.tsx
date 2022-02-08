import { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Carousel from "components/Carousel/Carousel";
import Card from "components/Cards/Card";
import Banner from "components/Banner/Banner";
import { Navbar } from "components/Navbar/Navbar";

const Body = styled.div`
  color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  let demoUrl: (i: number, root?: string) => string = (
    i,
    root = "normalList"
  ) => `
  https://res.cloudinary.com/dzlmilfku/image/upload/v1632766851/netflix-clone/${root}-${i}.jpg`;

  let urls: string[] = [
    demoUrl(1),
    demoUrl(2),
    demoUrl(3),
    demoUrl(4),
    demoUrl(5),
    demoUrl(6),
    demoUrl(7),
    demoUrl(8),
    demoUrl(9),
    demoUrl(10),
  ];
  let urlsTop: string[] = [
    demoUrl(1, "Top10"),
    demoUrl(2, "Top10"),
    demoUrl(3, "Top10"),
    demoUrl(4, "Top10"),
    demoUrl(5, "Top10"),
    demoUrl(6, "Top10"),
    demoUrl(7, "Top10"),
    demoUrl(8, "Top10"),
  ];
  let urlsDocu: string[] = [
    demoUrl(11),
    demoUrl(12),
    demoUrl(13),
    demoUrl(14),
    demoUrl(15),
    demoUrl(16),
    demoUrl(17),
    demoUrl(18),
    demoUrl(19),
    demoUrl(20),
  ];

  return (
    <Fragment>
      <Navbar></Navbar>
      <Body className="App">
        <Banner></Banner>
        <div style={{ marginTop: "-11.4rem", zIndex: 10 }}>
          <Carousel title="Trending Now" infiniteLoop>
            {[...urls].map((url: string, i: number) => (
              <Card url={url} />
            ))}
          </Carousel>
        </div>
        <Carousel title="Watch It Again" infiniteLoop>
          {urlsTop.map((url: string, i: number) => (
            <Card url={url} />
          ))}
        </Carousel>
        <Carousel title="Documentaries" infiniteLoop>
          {urlsDocu.map((url: string, i: number) => (
            <Card url={url} />
          ))}
        </Carousel>
        <Carousel title="Trending Now" infiniteLoop>
          {[...urls].map((url: string, i: number) => (
            <Card url={url} />
          ))}
        </Carousel>
        <Carousel title="Watch It Again" infiniteLoop>
          {urlsTop.map((url: string, i: number) => (
            <Card url={url} />
          ))}
        </Carousel>
        <Carousel title="Documentaries" infiniteLoop>
          {urlsDocu.map((url: string, i: number) => (
            <Card url={url} />
          ))}
        </Carousel>
      </Body>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
