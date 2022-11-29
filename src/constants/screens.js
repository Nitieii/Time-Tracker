import {HomeScreen} from '~/screens';

const screensName = {
  home: 'HomeScreen',
};

const navigateAuth = [{name: screensName.home, component: HomeScreen}];

const navigateBottom = [
  {
    name: screensName.home,
    label: 'Home',
    icon: 'calendar',
    component: HomeScreen,
  },
];

const screensDefault = {
  screensName,
  navigateAuth,
  navigateBottom,
};

export default screensDefault;
