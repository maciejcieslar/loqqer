import fs from 'fs-extra-promise';
import _ from 'lodash';
import { inspect } from 'util';

import { Level } from 'src/loqqer/levels';
import { createTemplate, format } from 'src/loqqer/format';

import Transport, { TransportConfig } from './transport';

interface Config extends TransportConfig {
  level?: Level;
  path: string;
  colorize?: boolean;
}

const defaultConfig: Partial<Config> = {
  level: 'info',
  colorize: true,
  template: createTemplate(
    format.level(),
    format.text(' - '),
    format.date('DD/MM/YYYY'),
    format.newLine(),
    format.location(),
    format.newLine(),
    format.message(),
  ),
};

class FileTransport extends Transport<Config> {
  private fileStream: fs.WriteStream;

  public constructor(unsafeConfig: Config) {
    const config = { ...defaultConfig, ...unsafeConfig };
    super(config);

    this.fileStream = fs.createWriteStream(config.path);
  }

  public format(value: any): string {
    if (_.isObject(value)) {
      return inspect(value, false, null, false);
    }

    return String(value);
  }

  public log({ message, level }: { message: string; level: string }) {
    this.fileStream.write(`\n${message}\n`);

    return message;
  }
}

export default FileTransport;
