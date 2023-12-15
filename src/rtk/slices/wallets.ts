import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HDNodeWallet} from 'ethers';

type WalletsState = {
  wallets: HDNodeWallet[];
};

const initialState: WalletsState = {
  wallets: [],
};

export const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<HDNodeWallet>) => {
      state.wallets.push(action.payload);
    },
    deleteAll: state => {
      state.wallets = [];
    },
  },
});

export const {addWallet, deleteAll} = walletsSlice.actions;

export default walletsSlice.reducer;
