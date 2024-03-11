import { FC } from 'react';

type ButtonProps = {
  label: string;
  backgroundColor: string;
};

const Button: FC<ButtonProps> = ({ label, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{label}</button>;
};

export default Button;
