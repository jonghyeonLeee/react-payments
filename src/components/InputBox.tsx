import InputTitle from './atoms/InputTitle.tsx';
import Input from './atoms/Input.tsx';

const InputBox = () => {
  return (
    <div className="input-container">
      <InputTitle title={'카드 소유자 이름(선택)'} />
      <Input className={'default'} type={'text'} maxLength={1}></Input>
      <Input className={'default'} type={'text'} maxLength={1}></Input>
    </div>
  );
};

export default InputBox;
