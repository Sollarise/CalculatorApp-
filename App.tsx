import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Display from './src/components/Display';
import ButtonGrid from './src/components/ButtonGrid';
import {calculate, formatDisplay, toHMS} from './src/logic/calculator';
import {colors} from './src/styles/theme';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState('');
  const [waiting, setWaiting] = useState(false);
  const [memory, setMemory] = useState(0);
  const [memOn, setMemOn] = useState(false);
  const [activeBtn, setActiveBtn] = useState('');

  const setDisp = (val: string) => setDisplay(formatDisplay(val));

  const press = (btn: string) => {
    setActiveBtn(btn);
    setTimeout(() => setActiveBtn(''), 120);

    if (btn === 'AC' || btn === 'C') {
      setDisplay('0'); setFirstValue('');
      setOperator(''); setWaiting(false);
    } else if (btn === 'DEL') {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    } else if (btn === '+/-') {
      setDisp(String(parseFloat(display) * -1));
    } else if (btn === '%') {
      setDisp(String(parseFloat(display) / 100));
    } else if (btn === 'SQR') {
      setDisp(String(Math.sqrt(parseFloat(display))));
    } else if (btn === 'TAX+') {
      setDisp(String(parseFloat(display) * 1.075));
    } else if (btn === 'TAX-') {
      setDisp(String(parseFloat(display) / 1.075));
    } else if (btn === 'MC') {
  setMemory(0);
  setMemOn(false);
    } else if (btn === 'MR') {
      setDisp(String(memory)); setWaiting(false);
    } else if (btn === 'M-') {
      const m = memory - parseFloat(display);
      setMemory(m); setMemOn(m !== 0);
    } else if (btn === 'M+') {
  const m = memory + parseFloat(display);
  setMemory(m);
  setMemOn(m !== 0);
    } else if (btn === 'H/M/S') {
      setDisplay(toHMS(display));
    } else if (btn === '=') {
      const resultStr = calculate(firstValue, display, operator);
      setDisp(resultStr);
      setFirstValue(resultStr);
      setOperator(''); setWaiting(false);
    } else if (['+', '-', 'x', '/'].includes(btn)) {
      setFirstValue(display); setOperator(btn); setWaiting(true);
    } else if (btn === '.') {
      if (waiting) { setDisplay('0.'); setWaiting(false); }
      else if (!display.includes('.')) { setDisplay(display + '.'); }
    } else {
      if (waiting) { setDisp(btn); setWaiting(false); }
      else { setDisp(display === '0' ? btn : display + btn); }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.body}>
        <View style={styles.topBar}>
          <Text style={styles.modelText}>SL-310UC</Text>
          <View style={styles.solarPanel}>
            {[0, 1, 2, 3].map(i => (
              <View key={i} style={styles.solarCell} />
            ))}
          </View>
        </View>
        <Display display={display} operator={operator} memOn={memOn} />
        <ButtonGrid onPress={press} activeBtn={activeBtn} />
        <View style={styles.bottomBar}>
          <Text style={styles.bottomText}>TWIN POWER</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '92%',
    backgroundColor: colors.body,
    borderRadius: 14,
    padding: 12,
    elevation: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  modelText: {
    color: colors.modelText,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.7,
  },
  solarPanel: {flexDirection: 'row', gap: 3},
  solarCell: {
    width: 22,
    height: 12,
    backgroundColor: colors.solarCell,
    borderRadius: 2,
  },
  bottomBar: {alignItems: 'center', marginTop: 8},
  bottomText: {
    color: colors.bottomText,
    fontSize: 9,
    letterSpacing: 2,
    opacity: 0.5,
  },
});