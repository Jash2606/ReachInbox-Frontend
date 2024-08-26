import { configureStore } from '@reduxjs/toolkit'
import features from '../features/feature'
export default configureStore({
  reducer: {counter: features,},
})