import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/theme';

type Props = {
  display: string;
  operator: string;
  memOn: boolean;
};

export default function Display({display, operator, memOn}: Props) {
  return (
    <View style={styles.displayShell}>
      <View style={styles.indRow}>
  {memOn && <Text style={styles.indActive}>M</Text>}
  <Text style={styles.indActive}>{operator}</Text>
</View>
      <View style={styles.lcd}>
        <Text
          style={styles.lcdText}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {display}
        </Text>
      </View>
      <View style={styles.indRow}>
        <Text style={styles.indSm}>TAX+</Text>
        <Text style={styles.indSm}>TAX-</Text>
        <Text style={styles.indSm}>RATE SET</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayShell: {
    backgroundColor: colors.display,
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: colors.displayBorder,
  },
  indRow: {flexDirection: 'row', gap: 6, marginBottom: 2},
  ind: {color: '#003040', fontSize: 10, fontWeight: '700'},
  indSm: {color: '#003a48', fontSize: 8, opacity: 0.7},
  lcd: {
    backgroundColor: colors.lcd,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'flex-end',
    minHeight: 140,
    justifyContent: 'flex-end',
  },
  lcdText: {
    color: colors.lcdText,
    fontSize: 58,
    fontWeight: '300',
    letterSpacing: 3,
  },
});