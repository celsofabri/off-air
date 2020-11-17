import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const StyledContainerBig = styled.div`
  display: flex;
  justify-content: center;
  height: 85%;
`;

export const StyledContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  height: 15%;
`;

export const StyledBar = styled.div`
  width: 15%;
  height: 100%;
  background-color: ${props => props.bgColor && props.bgColor}
`;
