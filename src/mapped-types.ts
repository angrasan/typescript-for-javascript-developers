export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// type Partial<T> = {[P in keyof T]?: T[P];};
type PropertyTypes = keyof Profile;

type Optional<T> = { [P in keyof T]?: T[P] | null };

type OptionalProfile = Optional<Profile>;
