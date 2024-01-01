import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HDNodeWallet} from 'ethers';

type WalletsState = {
  wallets: string[];
};

const initialState: WalletsState = {
  wallets: [],
};

export const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<string>) => {
      state.wallets.push(action.payload);
    },
    deleteAll: state => {
      state.wallets = [];
    },
  },
});

export const {addWallet, deleteAll} = walletsSlice.actions;

export default walletsSlice.reducer;
