export {};

let bmi = (height: number, weight: number): number =>
  weight / (height * height);

console.log(bmi(1.86, 85));


let bmi2: (height: number, weight: number) => number = (
  height,
  weight
) => weight / (height * height);

console.log(bmi2(1.86, 85));


let bmi3: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi3(1.86, 85));


let bmi4: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
}

console.log(bmi4(1.86, 85));
