import * as React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StackNavigate} from '~/navigate';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigate />
    </NavigationContainer>
  );
};

export default App;
