import Input from '../components/Input.tsx';

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    maxLength: 30,
    className: 'default',
    isOnlyNumber: false,
  },
};

export const Password = {
  args: {
    ...Default.args,
    className: 'password',
    type: 'password',
  },
};

export const NumberInput = {
  args: {
    ...Default.args,
    isOnlyNumber: true,
  },
};

export const MonthInput = {
  args: {
    ...Default.args,
    isMonthNumber: true,
  },
};
