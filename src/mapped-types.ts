export {};

type Profile = {
  name: string,
  age: number
};

type PartialType = Partial<Profile>;

type Propertytypes = keyof Profile;

type Optional<T> = { [ P in keyof T]?: T[P] | null};

type OptionalProfile = Optional<Profile>;