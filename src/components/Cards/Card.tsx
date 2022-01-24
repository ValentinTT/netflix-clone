import styled from "styled-components";
import Colors from "styles/Colors";

const StyledCard = styled.div`
  background: transparent; //${Colors.cardBg};
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 0 0.125rem;
`;

const StyledImage = styled.img`
  border-radius: 0.2rem;
  border: 0;
  width: 100%;
  height: auto;
  display: block;
`;

type CardProps = {
  url: string;
};

const Card = ({ url }: CardProps) => {
  return (
    <StyledCard>
      <StyledImage src={url}></StyledImage>
    </StyledCard>
  );
};

export default Card;
