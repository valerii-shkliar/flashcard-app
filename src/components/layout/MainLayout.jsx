import { useSelector } from 'react-redux';
import CardsSection from '../sections/CardsSection/CardsSection';
import Header from '../sections/Header/Header';
import FeatureWrapper from './FeatureWrapper';
import { getActiveMode } from '../../store/appModeSlice';
import { STUDY_MODE, CARDS_MODE } from '../../constants/data';

function MainLayout() {
  const appMode = useSelector(getActiveMode);

  return (
    <FeatureWrapper>
      <Header />
      <main>
        {appMode === STUDY_MODE && null}
        {appMode === CARDS_MODE && <CardsSection />}
      </main>
    </FeatureWrapper>
  );
}

export default MainLayout;
