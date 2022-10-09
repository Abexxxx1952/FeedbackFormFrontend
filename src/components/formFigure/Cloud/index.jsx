import styled from "styled-components";
import CloudImage from "../../../assets/cloud.svg";

const StyledCloudImage = styled.img`
  position: absolute;
  object-fit: contain;

  width: ${(props) => props.width};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  opacity: ${(props) => props.opacity};
`;

const Cloud = (props) => {
  return <StyledCloudImage {...props} src={CloudImage} alt="Cloud" />;
};

export default Cloud;
