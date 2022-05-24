export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Anna',
  underTwenty: false
};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Anna';
profile.age = 43;
profile.nationality = 'Japan';

console.log(profile);