import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {FONTS, COLORS, SIZES} from '~/constants';

import EmptyDataSVG from '~/assets/sketch/emptyData.svg';
import {PrimaryButton} from '~/components';

const EmptyData = () => {
  return (
    <View style={styles.container(COLORS, FONTS)}>
      <View style={styles.titleContainer(SIZES)}>
        <Text style={FONTS.body4}>It's looking a little empty here</Text>
        <Text style={FONTS.body5}>Start by adding a task item 👇</Text>
      </View>

      <EmptyDataSVG width={200} height={185} />

      <PrimaryButton content={'Add Task'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (COLORS, FONTS) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  titleContainer: SIZES => ({
    marginVertical: SIZES.padding,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default EmptyData;
