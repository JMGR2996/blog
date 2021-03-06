import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import reducers from './reducers/'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['post']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  let persistor = persistStore(store)

  return { store, persistor }
}
