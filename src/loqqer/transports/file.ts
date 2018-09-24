import fs from 'fs-extra-promise';
import _ from 'lodash';
import { inspect } from 'util';

import { createTemplate, format } from 'src/loqqer/format';

import Transport, { TransportConfig } from './transport';

interface Config extends TransportConfig {
  path: string;
}

const defaultConfig: Partial<Config> = {
  level: 'info',
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
      return `\n${inspect(value, false, null, false)}\n`;
    }

    return String(value);
  }

  public log({ message, level }: { message: string; level: string }) {
    this.fileStream.write(`${message}\n`);

    return message;
  }
}

export default FileTransport;
