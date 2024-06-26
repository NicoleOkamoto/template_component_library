// Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button'


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: false }, // Exclude variant from Storybook controls
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Invisible: Story = {
  args: {
    label: 'Invisible Button',
    variant: 'invisible',
    disabled: false,
  },
};

export const Dashed: Story = {
  args: {
    label: 'Dashed Button',
    variant: 'dashed',
    disabled: false,
  },
};
