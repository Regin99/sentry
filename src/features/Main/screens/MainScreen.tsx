import {Button, Text, View} from 'react-native';
import {useState} from 'react';
import {ethers} from 'ethers';
import {useDispatch} from 'react-redux';
import {addWallet, deleteAll} from '../../../rtk/slices';

export const MainScreen = () => {
  const [mnemonic, setMnemonic] = useState('');
  const dispatch = useDispatch();
  return (
    <View>
      <Text>MainScreen</Text>
      {/* <Button
        title="What"
        onPress={() => {
          const start = performance.now();
          const wallet = ethers.Wallet.createRandom();
          const end = performance.now();
          console.log(`Creating a Wallet took ${end - start} ms.`);
          dispatch(addWallet(wallet.mnemonic?.phrase || ''));
          wallet.mnemonic && setMnemonic(wallet.mnemonic.phrase);
        }}
      /> */}
      <Button
        title="DeleteAll"
        onPress={() => {
          dispatch(deleteAll());
        }}
      />
      <Text>{mnemonic}</Text>
    </View>
  );
};
