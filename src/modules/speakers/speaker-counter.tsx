import styled from '@emotion/styled';
import { PropsSelected } from '../../types';

const col1 = '#0099ff';
const col2 = '#d0e7f6';
const colSelected = 'hotpink';


export const SpeakerCounter = styled.div<PropsSelected>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  background-color: ${props => props.isSelected ? colSelected : col1};
  &:hover {
    cursor: pointer;
    background-color: ${colSelected};
  }
`;