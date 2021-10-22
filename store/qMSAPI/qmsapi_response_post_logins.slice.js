import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const qmsapi_post_login_create = createAsyncThunk(
  "qmsapi_response_post_logins/qmsapi_post_login_create",
  async payload => {
    const response = await apiService.qmsapi_post_login_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const qmsapi_response_post_loginsSlice = createSlice({
  name: "qmsapi_response_post_logins",
  initialState,
  reducers: {},
  extraReducers: {
    [qmsapi_post_login_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [qmsapi_post_login_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [qmsapi_post_login_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  qmsapi_post_login_create,
  slice: qmsapi_response_post_loginsSlice
}
