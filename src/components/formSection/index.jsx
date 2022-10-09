import styled from "styled-components";
import { useDispatch } from "react-redux";
import SendButton from "../formFigure/SendButton";
import {
  useGetNameField,
  useGetEmailField,
  useGetMessageField,
} from "../../redux/selectors/formSelectors";
import {
  editNameField,
  editEmailField,
  editMessageField,
} from "../../redux/actions";

import { getApi } from "../../utils/api/getApi";

const StyledHeader = styled.h1`
  font-size: 3vw;
  font-weight: 400;
  line-height: 130%;
  font-style: normal;
`;

const StyledInput = styled.input`
  width: 99%;
  margin-top: 1.4%;
  padding: 5.4% 5.4%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;

  height: ${(props) => props.height};
`;

function FormSection(props) {
  const dispatch = useDispatch();
  const name = useGetNameField();
  const email = useGetEmailField();
  const message = useGetMessageField();

  return (
    <>
      <StyledHeader>Reach out to us!</StyledHeader>
      <StyledInput
        height="16.2%"
        placeholder="Your name*"
        value={name}
        onChange={(e) => {
          dispatch(editNameField(e.currentTarget.value));
        }}
      />
      <StyledInput
        height="16.2%"
        placeholder="Your e-mail*"
        value={email}
        onChange={(e) => {
          dispatch(editEmailField(e.currentTarget.value));
        }}
      />
      <StyledInput
        height="32.9%"
        placeholder="Your message*"
        value={message}
        onChange={(e) => {
          dispatch(editMessageField(e.currentTarget.value));
        }}
      />
      <SendButton
        height="12.7%"
        width="38.7%"
        bottom="0%"
        left="0%"
        margin="4% 0% 0% 0%"
        onClick={() => {
          getApi({ name, email, message });
          console.log("qwwr");
        }}
      />
    </>
  );
}

export default FormSection;
