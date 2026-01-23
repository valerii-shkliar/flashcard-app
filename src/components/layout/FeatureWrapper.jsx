import '../../global-styles/_reset.scss';
const WRAPPER_CLASS = 'featureWrapper';

function FeatureWrapper(props) {
  return <div className={WRAPPER_CLASS}>{props.children}</div>;
}

export default FeatureWrapper;
