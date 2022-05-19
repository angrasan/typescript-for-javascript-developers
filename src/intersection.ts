export {};

type Pitcher1 = {
  throwinSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwinSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TwowayPlayer = {
//   throwinSpeed: number;
//   battingAverage: number;
// }

type TwowayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwowayPlayer = {
  throwinSpeed: 165,
  battingAverage: 0.286
}
