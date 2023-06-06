import styled from 'styled-components';

export const Msg = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.muted};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;
