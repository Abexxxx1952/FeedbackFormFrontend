import styled from "styled-components";
import SocialIconsImage from "../../../assets/socialIcons.svg";

const StyledSocialIcons = styled.img`
  position: absolute;
  object-fit: fill;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  height: ${(props) => props.height};
`;

const SocialIcons = (props) => {
  return (
    <StyledSocialIcons {...props} src={SocialIconsImage} alt="SocialIcons" />
  );
};

export default SocialIcons;
