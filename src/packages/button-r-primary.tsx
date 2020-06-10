import styled from '@emotion/styled';
import { PropsDisabled } from '../types';

export const Button = styled.button<Partial<PropsDisabled>>`
  white-space: nowrap;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 24px;
  margin: 0;
  padding: 0 16px;
  cursor: ${props => props.disabled ? 'initial' : 'pointer'};
  opacity: ${props => props.disabled ? '0.5' : 'initial'};
  transition: color 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out;
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  outline: 0;
  /* font-family: system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif; */
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  background-color: #008eff;
  box-shadow: none;
  &:hover {
    background-color: ${props => props.disabled ? '#008eff' : '#007ee5'}; 
  }
`;