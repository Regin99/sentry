import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';

const RootNavigator = () => {
  const wallets = useSelector((state: any) => state.wallets).wallets;
  return (
    <NavigationContainer>
      {wallets.length > 0 ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
