import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {rows} from '../constants/buttons';
import {BTN, getButtonStyle} from '../styles/theme';

type Props = {
  onPress: (btn: string) => void;
  activeBtn: string;
};

export default function ButtonGrid({onPress, activeBtn}: Props) {
  return (
    <View style={styles.keypad}>
      {rows.map((row, ri) => (
        <View key={ri} style={styles.row}>
          {row.map((btn, bi) => {
            const isWide = ri === 5 && btn === '0';
            const s = getButtonStyle(btn);
            const active = activeBtn === btn;
            return (
              <TouchableOpacity
                key={`${ri}-${bi}`}
                activeOpacity={1}
                onPress={() => onPress(btn)}
                style={[styles.btnWrap, isWide && styles.btnWrapWide]}>
                <View
                  style={[
                    styles.btnOuter,
                    {backgroundColor: s.border},
                    active && styles.btnOuterActive,
                  ]}>
                  <View
                    style={[
                      styles.btnInner,
                      {backgroundColor: s.bg},
                      active && styles.btnInnerActive,
                    ]}>
                    <View style={styles.btnSheen} />
                    <Text
                      style={[
                        styles.btnText,
                        {color: s.text},
                        btn.length > 3 && styles.btnTextSm,
                      ]}>
                      {btn}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  keypad: {gap: 10},
  row: {flexDirection: 'row', gap: 6},
  btnWrap: {flex: 1},
  btnWrapWide: {flex: 2},
  btnOuter: {
    borderRadius: 5,
    paddingBottom: 3,
    paddingRight: 1,
    elevation: 4,
  },
  btnOuterActive: {paddingBottom: 1, paddingTop: 2},
  btnInner: {
    borderRadius: 5,
    height: BTN * 0.88,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
  },
  btnInnerActive: {opacity: 0.85},
  btnSheen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnText: {fontSize: 15, fontWeight: '700', letterSpacing: 0.3},
  btnTextSm: {fontSize: 11, fontWeight: '600'},
});