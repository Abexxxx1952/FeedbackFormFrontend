import styled from "styled-components";
import YellowCartoon4Image from "../../../assets/yellow_cartoon_4.svg";

const StyledRedCartoon = styled.img`
  position: absolute;
  object-fit: contain;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  height: ${(props) => props.height};

  transform: rotate(-35deg);
`;

const YellowCartoon4 = (props) => {
  return (
    <StyledRedCartoon {...props} src={YellowCartoon4Image} alt="RedCartoon4" />
  );
};

export default YellowCartoon4;
