// Want to use Google Tracking, do it in here
// Visit: https://github.com/react-navigation/react-navigation/blob/master/docs/guides/Screen-Tracking.md
// for more info..

const getCurrentRouteName = navigationState => {
  if (!navigationState) { return null }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) { return getCurrentRouteName(route) }
  return route.routeName;
}

const screenTracking = ({ getState }) => next => (action) => {
  if ( action.type !== 'Navigation/NAVIGATE' && action.type !== 'Navigation/BACK') {
    return next(action);
  }

  const currentScreen = getCurrentRouteName(getState().navigation);
  const result = next(action);
  const nextScreen = getCurrentRouteName(getState().navigation);

  return result;
};

export default screenTracking;