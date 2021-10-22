// Convert time to hours and minutes

// Initially the Time was given in Minutes...
// We convert it into Hours and Minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting

// This function just changes 123 to $ 123 (I guess LoL)

export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
