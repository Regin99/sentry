import bip39 from 'react-native-bip39';

export const validateMnemonic = (mnemonic: string) =>
  bip39.validateMnemonic(mnemonic);
