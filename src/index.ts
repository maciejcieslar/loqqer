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

const bigObject = {
  first: {
    first: {
      first: {
        first: {
          first: {
            first: true,
            second: true,
            third: true,
          },
          second: {},
          third: {},
        },
        second: {},
        third: {},
      },
      second: {
        first: {
          first: {},
          second: {},
          third: {},
        },
        second: {},
        third: {},
      },
      third: {},
    },
    second: {
      first: {
        first: {},
        second: {},
        third: {},
      },
      second: {},
      third: {},
    },
    third: {},
  },
  second: {
    first: {},
    second: {},
    third: {},
  },
  third: {
    first: {},
    second: {},
    third: {},
  },
};

function test() {
  logger.info`heeey ${{ lmao: 5 }} two ${bigObject}`;
  logger.error`nope, not going to happen ${bigObject}`;
}

test();
