// Button.styles.ts
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) =>
 props.variant === 'primary' || props.variant === 'secondary' ? '#fff' : '#123C69'};
  background-color: ${(props) =>
    props.variant === 'primary' ? '#123C69' :
    props.variant === 'secondary' ? '#AC3B61' :
    props.variant === 'invisible' ? 'transparent' :
    props.variant === 'dashed' ? 'transparent' :
    '#f4c4c4'};
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  border: ${(props) => (props.variant === 'dashed' ? '2px dashed #123C69' : 'none')};

  ${(props) =>
    props.disabled &&
    `
      background-color: #e0e0e0;
      color: #a0a0a0;
      cursor: not-allowed;
  `}

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;