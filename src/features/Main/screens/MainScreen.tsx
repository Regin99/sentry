import {Button, Text, View} from 'react-native';
import {useState} from 'react';
import {ethers} from 'ethers';
import {useDispatch, useSelector} from 'react-redux';
import {addWallet, deleteAll} from '../../../rtk/slices';
import {Screen} from '../../../components/molecules';

export const MainScreen = () => {
  const wallets = useSelector(state => state.wallets);
  return (
    <Screen>
      <Text>Wallets</Text>
      {wallets.wallets.map(wallet => (
        <Text key={wallet}>{wallet}</Text>
      ))}
    </Screen>
  );
};
