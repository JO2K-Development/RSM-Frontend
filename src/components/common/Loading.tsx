import { Bars, ColorRing } from 'react-loader-spinner';
import FlexCenterContainer from '../containers/FlexCenterContainer';

const Loading = () => {
  return (
    <FlexCenterContainer>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </FlexCenterContainer>
  );
};

export default Loading;
