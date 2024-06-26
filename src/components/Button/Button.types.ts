// Button.types.ts
import { MouseEventHandler } from 'react';


export type ButtonVariant = 'primary' | 'secondary' | 'invisible' | 'dashed' ;

export type ButtonProps = {
  label?: string;
  disabled?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant: ButtonVariant;
};
