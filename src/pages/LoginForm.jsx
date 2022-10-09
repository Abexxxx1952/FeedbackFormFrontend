import RedCartoon6 from "../components/formFigure/RedCartoon6";
import YellowCartoon4 from "../components/formFigure/YellowCartoon4";
import Goodie1 from "../components/formFigure/Goodie1";
import Ellipse from "../components/formFigure/Ellipse";
import Map from "../components/formFigure/Map";
import Cloud from "../components/formFigure/Cloud";
import GreenCartoon80 from "../components/formFigure/GreenCartoon80";
import SocialIcons from "../components/formFigure/SocialIcons";
import FormSection from "../components/formSection";

import styled from "styled-components";

const StyledLoginForm = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const StyledMapWrapper = styled.div`
  height: 81.9%;
  max-width: 500px;
  position: absolute;
  top: 0%;
  right: 0%;
`;

const StyledFooterWrapper = styled.div`
  height: 17.7%;
  width: 100vw;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  position: absolute;
  bottom: 0%;
`;
const StyledFormInput = styled.div`
  height: 51%;
  width: 39.1%;
  position: absolute;
  left: 10.2%;
  top: 15.7%;
  display: flex;
  flex-direction: column;
`;

const clouds = [
  {
    right: 4.4,
    top: 43,
    opacity: 0.8,
    width: 14.4,
  },
  {
    right: 37.4,
    bottom: 22.5,
    opacity: 0.7,
    width: 11.8,
  },
  {
    left: 7,
    top: 61.1,
    opacity: 0.8,
    width: 9.1,
  },
  {
    left: 9.8,
    bottom: 13.3,
    opacity: 0.5,
    width: 20,
  },
  {
    left: 53.8,
    top: 9,
    opacity: 0.6,
    width: 15.2,
  },
  {
    left: 23.8,
    bottom: 30,
    opacity: 0.5,
    width: 15.2,
  },
  {
    left: -6.4,
    top: 35.5,
    opacity: 0.5,
    width: 15.2,
  },
  {
    left: 48.1,
    top: 22.7,
    opacity: 0.4,
    width: 11.9,
  },
  {
    left: -4.8,
    top: 16.5,
    opacity: 0.3,
    width: 17,
  },
  {
    left: 42.8,
    top: 11.6,
    opacity: 0.3,
    width: 9.6,
  },
];

function LoginForm(props) {
  return (
    <StyledLoginForm>
      {clouds.map(({ right, top, opacity, bottom, left, width }) => {
        return (
          <Cloud
            right={`${right}%`}
            top={`${top}%`}
            bottom={`${bottom}%`}
            left={`${left}%`}
            width={`${width}%`}
            opacity={`${opacity}`}
          />
        );
      })}
      <StyledMapWrapper>
        <Map />
        <RedCartoon6 left="-1.6%" top="65.1%" height="22.5%" />
        <Goodie1 top="55.8%" left="-8.1%" />
      </StyledMapWrapper>
      <StyledFooterWrapper bottom="0%">
        <GreenCartoon80 top="0%" right="8.9%" height="48.5%" />
        <YellowCartoon4 bottom="34%" right="-1.5%" height="42.9%" />
        <SocialIcons top="39.5%" left="23.8%" height="8%" />
      </StyledFooterWrapper>
      <StyledFormInput>
        <FormSection />
      </StyledFormInput>
      <Ellipse top="1.9%" left="49.6%" />
      <YellowCartoon4 left="3.2%" top="3.6%" height="6.2%" />
      <RedCartoon6 left="3.8%" bottom="-1.5%" height="14.9%" />
    </StyledLoginForm>
  );
}

export default LoginForm;
