import React from 'react';
import RootNavigator from './src/routes/RootNavigator';
import './ethers-setup';

function App(): React.JSX.Element {
  return <RootNavigator />;
}

export default App;
