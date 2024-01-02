import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Screen} from '../../../components/molecules';
import {ethers} from 'ethers';
import {RootStackScreenProps} from '../../../routes/types';

export const CreateWallet = ({
  navigation,
}: RootStackScreenProps<'CreateWallet'>) => {
  const [mnemonic, setMnemonic] = useState('');

  const generateMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    console.log('wallet', wallet);
    setMnemonic(wallet.mnemonic?.phrase || '');
  };

  useEffect(() => {
    generateMnemonic();
  }, []);

  const splittedMnemonic = useMemo(() => {
    return mnemonic?.split(' ') || [];
  }, [mnemonic]);

  return (
    <Screen>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.splittedContainer}>
          <View style={{width: '50%'}}>
            {splittedMnemonic.length &&
              splittedMnemonic
                .slice(0, splittedMnemonic.length / 2)
                .map((item, index) => (
                  <Text key={index} style={styles.text}>
                    {item}
                  </Text>
                ))}
          </View>
          <View style={{width: '50%'}}>
            {splittedMnemonic.length &&
              splittedMnemonic
                .slice(splittedMnemonic.length / 2)
                .map((item, index) => (
                  <Text key={index} style={styles.text}>
                    {item}
                  </Text>
                ))}
          </View>
        </View>
        <Text style={{marginTop: 10}}>Remember ur phrase</Text>
        <TouchableOpacity style={styles.button} onPress={generateMnemonic}>
          <Text style={styles.text}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('CreateWalletConfirm', {
              mnemonic,
            })
          }>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  splittedContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(211,5,123,0.5)',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
