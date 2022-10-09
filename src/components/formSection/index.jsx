import SendButton from "../formFigure/SendButton";

import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 3vw;
  font-weight: 400;
  line-height: 130%;
  font-style: normal;
`;

const StyledInput = styled.input`
  width: 99%;
  margin-top: 1.4%;
  padding: 8.1% 5.4%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  height: ${(props) => props.height};
`;

function FormSection(props) {
  return (
    <>
      <StyledHeader>Reach out to us!</StyledHeader>
      <StyledInput height="16.2%" placeholder="Your name*" />
      <StyledInput height="16.2%" placeholder="Your e-mail*" />
      <StyledInput height="32.9%" placeholder="Your message*" />
      <SendButton
        height="12.7%"
        width="38.7%"
        bottom="0%"
        left="0%"
        margin="4% 0% 0% 0%"
      />
    </>
  );
}

export default FormSection;
