import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const BTN = (width * 0.88) / 5 - 6;

export const colors = {
  background: '#006680',
  body: '#008B9C',
  display: '#006070',
  displayBorder: '#004a58',
  lcd: '#b8cdb0',
  lcdText: '#1a2a18',
  modelText: '#d0f0f8',
  bottomText: '#d0f0f8',
  solarCell: '#1a1a2a',
};

export type BtnStyle = {bg: string; border: string; text: string};

export const getButtonStyle = (btn: string): BtnStyle => {
  if (['TAX+', 'TAX-'].includes(btn))
    return {bg: '#006070', border: '#004d5e', text: '#fff'};
  if (['MC', 'MR', 'M-', 'M+'].includes(btn))
    return {bg: '#005f75', border: '#004a5e', text: '#fff'};
  if (['H/M/S', 'SQR', '%'].includes(btn))
    return {bg: '#007080', border: '#005a6a', text: '#fff'};
  if (['+', '-', 'x', '/'].includes(btn))
    return {bg: '#1a4f60', border: '#0f3a48', text: '#fff'};
  if (btn === '=')
    return {bg: '#00889e', border: '#006070', text: '#fff'};
  if (btn === 'AC')
    return {bg: '#4a8a9a', border: '#3a7080', text: '#fff'};
  if (btn === 'C')
    return {bg: '#3a7a8a', border: '#2a6070', text: '#fff'};
  if (btn === 'DEL')
    return {bg: '#2d6a7a', border: '#1d5060', text: '#fff'};
  return {bg: '#205a6d', border: '#154a5a', text: '#fff'};
};