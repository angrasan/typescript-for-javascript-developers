export {};

let name = 'Anna';

name = 'Tim';

let nickname = 'Tiger' as const;
nickname = 'Tiger';

let profile = {
  name: 'Lion',
  height: 178
} as const ;

profile.name = 'Lion';