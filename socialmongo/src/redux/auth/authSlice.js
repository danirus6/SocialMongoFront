import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
  user: user || null,
  token: token || null,
  isError: false,
  isSuccess: false,
  message: ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user)

  } catch (error) {
    console.error(error);
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const login = createAsyncThunk('auth/login', async (user) => {
  try {
    return await authService.login(user)

  } catch (error) {
    // console.error(error.response.status)
    return error
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    return await authService.logout()

  } catch (error) {
    console.error(error)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true
        state.message = action.payload.message
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null
        state.token = null
      })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer