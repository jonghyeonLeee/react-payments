import { FC } from 'react';
import styled from '@emotion/styled';

export interface InputTitleProps {
  title: string;
  titleInfo?: string;
}

const InputTitle: FC<InputTitleProps> = ({ title, titleInfo }) => {
  return (
    <InputTitleWrapper>
      <span>{title}</span>
      <span>{titleInfo ?? ''}</span>
    </InputTitleWrapper>
  );
};

const InputTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default InputTitle;
