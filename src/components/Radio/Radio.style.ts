import styled, { css } from "styled-components";

export const Group = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 5px;
  background: #f9f9f9;
`;

export const Option = styled.button<{ selected: boolean }>`
  flex: 1;
  height: 40px;
  padding: 5px;
  border-radius: inherit;
  transition: background 0.1s;
  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background: #42a0ff;
    `}
`;
