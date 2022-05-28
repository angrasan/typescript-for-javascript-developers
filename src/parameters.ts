export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Anna', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Tim", 22];

debugProfile(...profile);

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
