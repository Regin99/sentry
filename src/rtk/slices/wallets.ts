import {PayloadAction, createSlice} from '@reduxjs/toolkit';

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
  },
});

export const {addWallet} = walletsSlice.actions;

export default walletsSlice.reducer;
