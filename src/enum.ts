export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
};

console.log(Months.September);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008800',
  BLUE = '#0000ff',
  // YELLOW = '#ffff00',
  BLACK = '000000'
};

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#ffff00',
  GRAY = '#808080'
};

COLORS.YELLOW;