import moment from 'moment';
import emoji from 'node-emoji';

interface Info {
  date: Date;
  level: string;
  message: string;
  location: string;
}

type Formatter = (info: Info) => string;

const format = {
  date: (format: string): Formatter => ({ date }) =>
    moment(date).format(format),
  location: (): Formatter => ({ location }) => location,
  message: (): Formatter => ({ message }) => message,
  text: (message: string): Formatter => () => emoji.emojify(message),
  level: (): Formatter => ({ level }) => level.toUpperCase(),
  newLine: (): Formatter => () => '\n',
};

const createTemplate = (...fns: Formatter[]) => {
  return (info) => {
    return fns.reduce((prev, curr) => {
      return `${prev}${curr(info)}`;
    }, '');
  };
};

export { createTemplate, format, Info };
