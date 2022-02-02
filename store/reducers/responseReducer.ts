import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface responseReducerProps {
  response: string,
  error: string,
  isSuccess: boolean ,
  status: number,
  loading: boolean
}

const initialState: responseReducerProps = {
  response: "",
  error: "",
  isSuccess: false,
  status: 200,
  loading: false
}

const slice = createSlice({
  name: 'responseReducer',
  initialState,
  reducers: {
    successRequest: (state, action: PayloadAction<{json: string, status: number}>) => {
      state.response = action.payload.json,
      state.status = action.payload.status,
      state.isSuccess = true
      state.loading = false
      state.error = ''
    },
    failedRequest: (state, action: PayloadAction<{json: string, status: number, error: string}>) => {
      state.response = '',
      state.status = action.payload.status,
      state.isSuccess = false,
      state.error = action.payload.error
      state.loading = false
    },
    startfetching: (state, action: PayloadAction) => {
      state.loading = true,
      state.error = '',
      state.response = ''
    }
  }
})

export default slice.reducer

export const {startfetching,failedRequest, successRequest} = slice.actions