import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWindowItem } from '@/models/.'

import { IParam } from '@/models/.'

interface WindowProps {
  windows: IWindowItem[] | null,
  currentWindow: IWindowItem
}

const initialState: WindowProps = {
  windows: [] as IWindowItem[],
  currentWindow: null
}

const slice = createSlice({
  name: 'windowReducer',
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<IWindowItem>) => {

      if (!state.windows.length) {
        state.currentWindow = action.payload
      }

      state.windows.push(action.payload)
    },

    removeWindow: (state, action: PayloadAction<string>) => {

      if (action.payload === state.currentWindow.id) {
        state.currentWindow = null
      }
      state.windows = state.windows.filter(item => item.id !== action.payload)
    },

    setCurrentWindow: (state, action:PayloadAction<IWindowItem>) => {
      state.currentWindow = action.payload
    },

    changeItemTable: (state, action: PayloadAction<{table: string, row: number, field: string, val: string}>) => {
      state.currentWindow[action.payload.table][action.payload.row][action.payload.field] = action.payload.val
    },

    changeMethod: (state, action: PayloadAction<string>) => {
      state.currentWindow.method = action.payload      
    },

    changeBody: (state, action: PayloadAction<string>) => {
      state.currentWindow.body = action.payload
    },

    addRow: (state, action: PayloadAction<{key: string, param: IParam}>) => {
      state.currentWindow[action.payload.key].push(action.payload.param) 
    },

    deleteRow: (state, action:PayloadAction<{idx: number, key: string}> ) => {

      console.log(state.currentWindow[action.payload.key], action.payload.key)

      state.currentWindow[action.payload.key] = state.currentWindow[action.payload.key].filter((item: IParam, i: number) => i !== action.payload.idx)
    },

  }

})

export default slice.reducer
export const { addWindow, changeItemTable, changeBody, changeMethod, removeWindow , setCurrentWindow, addRow, deleteRow} = slice.actions