import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ethers} from 'ethers';

export const MainScreen = () => {
  const [mnemonic, setMnemonic] = useState('');
  return (
    <View>
      <Text>MainScreen</Text>
      <Button
        title="What"
        onPress={() => {
          const start = performance.now();
          const wallet = ethers.Wallet.createRandom();
          const end = performance.now();
          console.log(`Creating a Wallet took ${end - start} ms.`);
          wallet.mnemonic && setMnemonic(wallet.mnemonic.phrase);
        }}
      />
      <Text>{mnemonic}</Text>
    </View>
  );
};
