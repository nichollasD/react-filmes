import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;

export const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

