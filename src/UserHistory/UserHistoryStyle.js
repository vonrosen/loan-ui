import styled from 'styled-components';

const HistoryDiv = styled.div`
  padding-right: 50px;
  visibility: ${props => props.userRequests ? "visible" : "hidden"};
`;

const HistoryTitleDiv = styled.div`
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
`;

export { HistoryDiv, HistoryTitleDiv };