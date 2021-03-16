import styled from "styled-components";

export const Form = styled.div`
  width: 400px;
`;

export const Field = styled.div`
  & ~ & {
    margin-top: 10px;
  }
`;
