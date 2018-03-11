import React, { Component } from 'react'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const AppProvider = (
    <Provider store={store}>
      <App />
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
