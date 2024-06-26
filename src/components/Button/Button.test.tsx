// Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  const variants = ['primary', 'secondary', 'invisible', 'dashed'] as const;

  variants.forEach(variant => {
    test(`should render ${variant} button and be visible`, () => {
      render(<Button label={`${variant} Button`} variant={variant} />);
      const button = screen.getByText(`${variant} Button`);
      expect(button).toBeVisible();
    });

    test(`should change background color when ${variant} button is disabled`, () => {
      render(<Button label={`${variant} Button`} variant={variant} disabled />);
      const button = screen.getByText(`${variant} Button`);
      expect(button).toBeDisabled();
      expect(button).toHaveStyle('background-color: #e0e0e0');
    });
  });
});
