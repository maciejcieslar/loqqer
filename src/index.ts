import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  src: __dirname,
});

import path from 'path';
import { createLogger, transports, createTemplate, format } from 'src/loqqer';

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.console({
      level: 'debug',
      colorize: true,
      template: createTemplate(
        format.level(),
        format.text(':fire: :heart: :fire:'),
        format.newLine(),
        format.message(),
        format.newLine(),
        format.location(),
      ),
    }),
    new transports.file({
      path: path.join(__dirname, '../hey.txt'),
      level: 'info',
    }),
    new transports.file({
      path: path.join(__dirname, '../heyyya.txt'),
      level: 'info',
    }),
  ],
});

const bigObject = [
  {
    _id: '5ba7840f298023585dfd4b7c',
    index: 0,
    guid: '95f14d33-0dd2-43ef-bc1c-1d8de4e72c7d',
    isActive: false,
    balance: '$1,938.64',
    picture: 'http://placehold.it/32x32',
    age: 26,
    eyeColor: 'green',
    name: {
      first: 'Rhea',
      last: 'Clark',
    },
    company: 'AVENETRO',
    email: 'rhea.clark@avenetro.net',
    phone: '+1 (837) 471-3366',
    address: '531 Debevoise Street, Abiquiu, Oregon, 7728',
    about: 'Veniam aliqua eu qui culpa nisi anim qui veniam ex enim.',
    registered: 'Wednesday, September 5, 2018 5:49 AM',
    latitude: '-27.154951',
    longitude: '-125.263789',
    tags: ['consequat', 'ad', 'id', 'sunt', 'occaecat'],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: 'Sampson Hughes',
      },
      {
        id: 1,
        name: 'Mathis Branch',
      },
      {
        id: 2,
        name: 'Sabrina Richmond',
      },
    ],
    greeting: 'Hello, Rhea! You have 7 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '5ba7840f2b0a77562ca911e9',
    index: 1,
    guid: '6af39bb3-932b-4cea-8a66-3114f33e40cd',
    isActive: false,
    balance: '$3,423.66',
    picture: 'http://placehold.it/32x32',
    age: 29,
    eyeColor: 'blue',
    name: {
      first: 'Robbie',
      last: 'Rollins',
    },
    company: 'MUSANPOLY',
    email: 'robbie.rollins@musanpoly.co.uk',
    phone: '+1 (889) 429-2292',
    address: '737 Village Court, Riceville, Wisconsin, 1234',
    about: 'Veniam aliqua eu qui culpa nisi anim qui veniam ex enim.',
    registered: 'Friday, December 12, 2014 12:04 PM',
    latitude: '-48.466841',
    longitude: '109.167268',
    tags: ['amet', 'laborum', 'excepteur', 'consectetur', 'reprehenderit'],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: 'Lillie Mcmahon',
      },
      {
        id: 1,
        name: 'Briana Sims',
      },
      {
        id: 2,
        name: 'Caldwell Norman',
      },
    ],
    greeting: 'Hello, Robbie! You have 8 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '5ba7840ff24f0f42a1e4bf5d',
    index: 2,
    guid: 'b30809e3-00fb-4c83-a511-20d76377d32f',
    isActive: true,
    balance: '$1,562.38',
    picture: 'http://placehold.it/32x32',
    age: 20,
    eyeColor: 'green',
    name: {
      first: 'Oneal',
      last: 'Mills',
    },
    company: 'BUNGA',
    email: 'oneal.mills@bunga.com',
    phone: '+1 (928) 469-3397',
    address: '667 Kings Place, Highland, Washington, 7345',
    about: 'Veniam aliqua eu qui culpa nisi anim qui veniam ex enim.',
    registered: 'Thursday, December 24, 2015 8:50 AM',
    latitude: '-51.350744',
    longitude: '-110.709116',
    tags: ['aliquip', 'ullamco', 'occaecat', 'ullamco', 'anim'],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: 'George Ellison',
      },
      {
        id: 1,
        name: 'Lacey Hood',
      },
      {
        id: 2,
        name: 'Hill Clarke',
      },
    ],
    greeting: 'Hello, Oneal! You have 6 unread messages.',
    favoriteFruit: 'strawberry',
  },
];

function test() {
  logger.info`heeey ${{ lmao: 5 }} two ${bigObject}`;
  logger.error`nope, not going to happen ${bigObject}`;
}

test();
