import styled from "styled-components";
import EllipseImage from "../../../assets/ellipse.svg";

const StyledGoodie = styled.img`
  width: 6%;
  height: 7.7%;
  position: absolute;
  object-fit: contain;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

const Ellipse = (props) => {
  return <StyledGoodie {...props} src={EllipseImage} alt="Ellipse" />;
};

export default Ellipse;
