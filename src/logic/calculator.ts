export const calculate = (
  firstValue: string,
  secondValue: string,
  operator: string,
): string => {
  const a = parseFloat(firstValue);
  const b = parseFloat(secondValue);
  let result = 0;
  if (operator === '+') result = a + b;
  else if (operator === '-') result = a - b;
  else if (operator === 'x') result = a * b;
  else if (operator === '/') result = b !== 0 ? a / b : 0;
  return String(parseFloat(result.toPrecision(9)));
};

export const formatDisplay = (val: string): string => {
  const n = parseFloat(val);
  if (!isNaN(n) && String(n).length > 10) {
    return String(parseFloat(n.toPrecision(9)));
  }
  return val;
};

export const toHMS = (val: string): string => {
  const total = Math.round(parseFloat(val) * 3600);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return (
    h +
    'h' +
    String(m).padStart(2, '0') +
    'm' +
    String(s).padStart(2, '0') +
    's'
  );
};