import React from 'react';
import RootNavigator from './src/routes/RootNavigator';
import './ethers-setup';
import {Provider} from 'react-redux';
import {store} from './src/rtk/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
