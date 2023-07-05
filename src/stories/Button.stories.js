import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant : 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant : 'secondary',
    label: 'Button',
  },
};

export const Success = {
  args: {
    variant : 'success',
    label: 'Button',
  },
};

export const Error = {
  args: {
    variant : 'error',
    label: 'Button',
  },
};
