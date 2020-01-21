import styled from 'styled-components';

const HistoryDiv = styled.div`
  align: center;
  visibility: ${props => props.userRequests ? "visible" : "hidden"};
`;

export { HistoryDiv };