import InputTitle from '../../components/atoms/InputTitle.tsx';

export default {
  component: InputTitle,
  title: 'InputTitle',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: '카드 번호',
  },
};

export const InputLengthInfo = {
  args: {
    title: '카드 소유자 이름 (선택)',
    lengthInfo: '0/30',
  },
};
