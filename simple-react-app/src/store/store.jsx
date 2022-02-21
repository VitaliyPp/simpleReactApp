import { configureStore } from '@reduxjs/toolkit';
import data from '../assets/data/data'

export default configureStore({
  reducer: {
    value: data,
  }
})
