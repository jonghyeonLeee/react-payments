import { useState } from 'react';
import CreatePage from './pages/Card/CreatePage.tsx';
import CreateCompletePage from './pages/Card/CreateCompletePage.tsx';
import ListPage from './pages/Card/ListPage.tsx';

export type PageStep = '카드생성' | '카드생성완료' | '카드리스트';

function App() {
  const [step, setStep] = useState<PageStep>('카드리스트');
  return (
    <>
      {step === '카드생성' && <CreatePage />}
      {step === '카드생성완료' && <CreateCompletePage />}
      {step === '카드리스트' && <ListPage />}
    </>
  );
}

export default App;
