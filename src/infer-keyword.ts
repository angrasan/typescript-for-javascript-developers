export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturntypeFromAdd = ReturnType<typeof add>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
