import styled from "styled-components";

const StyledSendButton = styled.button`
  background: #fad34f;
  border-radius: 500px;
  border: 1px solid #dcdcdc;
  padding: auto;
  cursor: pointer;

  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const SendButton = (props) => {
  return <StyledSendButton {...props}>Send message</StyledSendButton>;
};

export default SendButton;
