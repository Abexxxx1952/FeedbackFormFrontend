import styled from "styled-components";
import RedCartoon6Image from "../../../assets/red_cartoon_6.svg";

const StyledRedCartoon = styled.img`
  position: absolute;
  object-fit: fill;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  height: ${(props) => props.height};

  transform: rotate(-45deg);
`;

const RedCartoon6 = (props) => {
  return (
    <StyledRedCartoon {...props} src={RedCartoon6Image} alt="RedCartoon6" />
  );
};

export default RedCartoon6;
