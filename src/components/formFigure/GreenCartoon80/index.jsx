import styled from "styled-components";
import GreenCartoon80Image from "../../../assets/green_cartoon_80.svg";

const StyledGreenCartoon = styled.img`
  position: absolute;
  object-fit: fill;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  height: ${(props) => props.height};
`;

const GreenCartoon80 = (props) => {
  return (
    <StyledGreenCartoon
      {...props}
      src={GreenCartoon80Image}
      alt="GreenCartoon80"
    />
  );
};

export default GreenCartoon80;
