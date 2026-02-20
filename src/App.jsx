import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAmountCards, saveCards } from './store/flashCardsSlice';
import { cards } from './constants/data';

function App() {
  const amountCards = useSelector(getAmountCards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (amountCards === 0) {
      dispatch(saveCards(cards));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainLayout />;
}

export default App;
