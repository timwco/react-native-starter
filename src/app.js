/**
* @providesModule App
*/

import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { NavigationActions, addNavigationHelpers } from 'react-navigation';

import Navigator  from './navigator/navigator';
import Reducers   from './lib/reducers';
import Sagas      from './lib/sagas';

import screenTracking from './navigator/screen-tracking';

// Set up Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Set up Saga Middleware, create store and run Sagas
const sagaMiddleware = createSagaMiddleware()

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Home'));
const navReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};

// Create Navigator Wrapper with helpers
class App extends React.Component {
  render() {
    return (
      <Navigator 
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}         
      />
    )
  }
}

// Connect Nav State
const mapStateToProps = (state) => ({
  nav: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

// Create Store, and jam in Sagas
const store = createStore(
  Reducers(navReducer),
  composeEnhancers(applyMiddleware(sagaMiddleware, screenTracking))
)
sagaMiddleware.run(Sagas)


// Load Default View within the Store Provider
export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)