import styled from "styled-components";
import Goodie1Image from "../../../assets/goodie1.svg";

const StyledGoodie = styled.img`
  height: 13.7%;
  position: absolute;
  object-fit: contain;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

const Goodie1 = (props) => {
  return <StyledGoodie {...props} src={Goodie1Image} alt="Goodie1" />;
};

export default Goodie1;
