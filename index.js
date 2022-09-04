const oddishOrEvenish = (x) => {
  let sum = 0;
  let str = x.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  if (sum % 2 === 1) {
    return 'Odd';
  } else return 'Even';
};
