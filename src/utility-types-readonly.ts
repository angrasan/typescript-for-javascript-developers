export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Anna",
  age: 43,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Tom",
  age: 40,
};

type YomitoriSnyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSnyo<Profile>;

console.log(friend);
