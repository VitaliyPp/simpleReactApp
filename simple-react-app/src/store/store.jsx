import { configureStore } from '@reduxjs/toolkit';
import data from '../redux/redux'

export default configureStore({
  reducer: {
    value: data,
  }
})
