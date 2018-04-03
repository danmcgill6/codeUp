import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import App from './components/App';
import reducers from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);


const AppProvider = (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor} >
       <App />
      </PersistGate>
    </Provider>
  );
  
  
  class Main extends Component {
    render() {
      return (
        AppProvider
      );
    }
  }
  
  export default Main;
