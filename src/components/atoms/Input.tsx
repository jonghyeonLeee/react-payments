import { FC, ChangeEvent, useState } from 'react';
import '../../../styles/input.css';

export const InputClassName = {
  default: 'input-basic',
  password: 'input-basic w-15',
  securityCode: 'input-basic w-25',
};

export interface InputProps {
  className: keyof typeof InputClassName;
  defaultValue?: string;
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  maxLength?: number;
  onChange?: () => void;
  isOnlyNumber?: boolean;
  isMonthNumber?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  defaultValue,
  type,
  placeholder,
  maxLength,
  onChange,
  isOnlyNumber = false,
  isMonthNumber = false,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10); // 입력 값을 숫자로 변환

    // isMonthNumber가 true이고 숫자 값이 1~12 범위에 속하지 않는 경우 함수 종료
    if (isMonthNumber && (isNaN(numericValue) || numericValue < 1 || numericValue > 12)) return;

    // 숫자만 입력 가능한 설정인 경우 또는 입력 값이 숫자일 때 setValue 호출
    if (!isOnlyNumber || /^\d*$/.test(inputValue)) setValue(inputValue);

    if (typeof onChange === 'function') onChange();
  };

  return (
    <input
      className={InputClassName[className]}
      defaultValue={defaultValue ?? ''}
      type={type}
      placeholder={placeholder ?? ''}
      maxLength={maxLength}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
