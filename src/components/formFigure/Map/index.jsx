import styled from "styled-components";
import MapImage from "../../../assets/maskGroup.svg";

const StyledMap = styled.img`
  width: 100%;
  height: 100%;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;

const Map = (props) => {
  return <StyledMap {...props} src={MapImage} alt="Map" />;
};

export default Map;
