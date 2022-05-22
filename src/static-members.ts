export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Juntarou';
  static lastName: string = 'Ito'

  static work() {
    // return "Hey! guys Are you interested in TypeScript? let's dive into TypeScript";
    return `Hey guys! This is ${this.firstName} Are you interested in TypeScript? let's dive into TypeScript`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.firstName);
console.log(Me.work());