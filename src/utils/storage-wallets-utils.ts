import EncryptedStorage from 'react-native-encrypted-storage';

export const setWalletCredentials = async (address: string, creds: string) =>
  await EncryptedStorage.setItem(address, creds);

export const getWalletCredentials = async (address: string) =>
  await EncryptedStorage.getItem(address);
