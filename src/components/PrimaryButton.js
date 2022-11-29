import {memo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {Plus} from '~/constants/icons';
import {COLORS, FONTS, SIZES} from '~/constants';

const PrimaryButton = ({content}) => {
  return (
    <TouchableOpacity style={styles.container(COLORS)}>
      <Plus width={15} height={15} />
      <Text style={[FONTS.h5, {color: 'white', marginLeft: SIZES.base}]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (COLORS, FONTS) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.padding,
  }),
});

export default memo(PrimaryButton);
