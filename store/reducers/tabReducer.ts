import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface tabReducerProps {
  activeTab: string 

}

const initialState: tabReducerProps = {
  activeTab: 'Params'
}

const slice = createSlice({
  name: 'tabreducer',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    }
  }
})

export default slice.reducer

export const {setActiveTab} = slice.actions