import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ethers, formatEther} from 'ethers';
import {useDispatch, useSelector} from 'react-redux';
import {addWallet, deleteAll} from '../../../rtk/slices';
import {Screen} from '../../../components/molecules';
import {JsonRpcProvider} from 'ethers';

export const MainScreen = () => {
  const wallets = useSelector(state => state.wallets);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState('');

  const provider = new JsonRpcProvider(
    'https://goerli.infura.io/v3/0a3ab1801b524efa9379314cd9450e70',
  );
  return (
    <Screen>
      <Text>Wallets</Text>
      {wallets.wallets.map(wallet => (
        <Text key={wallet}>{wallet.label}</Text>
      ))}
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
        Balance: {balance || '0'}
      </Text>
      <Button title="Delete wallets" onPress={() => dispatch(deleteAll())} />
      <Button
        title="Get balances"
        onPress={async () => {
          const balance = await provider.getBalance(
            wallets.wallets[0].pubAddress,
          );
          const formattedBalance = formatEther(balance);
          setBalance(formattedBalance);

          console.log('balance', balance);
          console.log('formattedBalance', formattedBalance);
        }}
      />
    </Screen>
  );
};
