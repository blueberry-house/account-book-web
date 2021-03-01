import styled, { css } from "styled-components";

export const Input = styled.button`
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  text-align: left;
  border-radius: 5px;
  background: #f9f9f9;
`;

export const Menu = styled.div<{
  top: number;
  left: number;
  width: number;
  expanded: boolean;
}>`
  visibility: hidden;
  overflow-y: auto;
  position: fixed;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  max-height: 200px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #eee;
  background: #fff;
  ${({ expanded }) =>
    expanded &&
    css`
      visibility: visible;
    `}
`;

export const Option = styled.button<{ selected: boolean }>`
  width: 100%;
  min-height: 30px;
  padding: 5px 15px;
  text-align: left;
  transition: background 0.1s;
  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background: #42a0ff;
    `}
  ${({ selected }) =>
    !selected &&
    css`
      &:hover {
        background: #f9f9f9;
      }
    `}
`;
