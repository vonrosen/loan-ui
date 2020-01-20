import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  align: center;
  visibility: ${props => props.term ? "visible" : "hidden"};
`;

export { StyledDiv };