import { FC } from 'react';

type ButtonProps = {
  label: string;
  backgroundColor: string;
};

const Button: FC<ButtonProps> = ({ backgroundColor }) => {
  return <button style={{ backgroundColor }} />;
};

export default Button;
