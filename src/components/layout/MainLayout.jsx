import { useSelector } from 'react-redux';
import CardsSection from '../sections/CardsSection/CardsSection';
import Header from '../sections/Header/Header';
import FeatureWrapper from './FeatureWrapper';
import { getActiveMode } from '../../store/appModeSlice';
import { MODE } from '../../constants/data';
import StudySection from '../sections/StudySection/StudySection';

function MainLayout() {
  const appMode = useSelector(getActiveMode);

  return (
    <FeatureWrapper>
      <Header />
      <main>
        {appMode === MODE.STUDY && <StudySection />}
        {appMode === MODE.CARDS && <CardsSection />}
      </main>
    </FeatureWrapper>
  );
}

export default MainLayout;
