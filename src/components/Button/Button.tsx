// Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  label,
  size,
  backgroundColor,
  disabled,
  variant,
  onClick,
  ...props }) => {
   return (
    <StyledButton
      type="button"
      style={{backgroundColor}}
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
