import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const HistoryDiv = styled.div`
  display: inline-block;
  visibility: ${props => props.userRequests ? "visible" : "hidden"};
`;

const HistoryTableStyle = createGlobalStyle`
  table {
    padding-right: 10px;
    td {
      text-align: left;
    }      
  }
`;

export { HistoryDiv, HistoryTableStyle };