import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLang } from "../../types/lang";
import { getLang } from "../../hooks/getLang";

interface langState {
    lang: TLang;
}

const initialState: langState = {
    lang: getLang(),
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<TLang>) {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload)
    },
  },
});

export const { setLang } = langSlice.actions;
