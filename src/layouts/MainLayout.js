import React from 'react';
import {View} from 'react-native';

import {Header} from '~/layouts';
import {COLORS} from '~/constants';

const MainLayout = ({children, title, headerProps, loading, titleStyle}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
      }}>
      {/* {loading ? <LoadingScreen /> : null} */}
      <Header title={title} {...headerProps} titleStyle={titleStyle} />
      {children}
    </View>
  );
};

export default MainLayout;
