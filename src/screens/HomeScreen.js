import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MainLayout from '../layouts/MainLayout.js';
import {EmptyData} from '~/components';

import {FONTS, COLORS} from '~/constants';

const HomeScreen = () => {
  return (
    <MainLayout title="HomeScreen">
      <Text style={styles.welcomeText(FONTS)}>Hi, Ngo Tuan Anh</Text>
      <EmptyData />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  welcomeText: FONTS => ({
    ...FONTS.h2,
  }),
});

export default HomeScreen;
