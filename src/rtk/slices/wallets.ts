import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type Wallet = {
  pubAddress: string;
  label: string;
};

type WalletsState = {
  wallets: Wallet[];
};

const initialState: WalletsState = {
  wallets: [],
};

export const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallets.push(action.payload);
    },
    deleteAll: state => {
      state.wallets = [];
    },
  },
});

export const {addWallet, deleteAll} = walletsSlice.actions;

export default walletsSlice.reducer;
