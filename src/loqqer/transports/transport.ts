import { Info } from 'src/loqqer/format';
import { isAllowed, Level } from 'src/loqqer/levels';

export interface TransportConfig {
  format?: (value: any) => string;
  level?: Level;
  template?: (info: Info) => string;
}

const defaultConfig: Partial<TransportConfig> = {
  template: ({ message }) => message,
  format: JSON.stringify,
};

class Transport<T extends TransportConfig = TransportConfig> {
  protected config: T;

  public constructor(config: T) {
    this.config = { ...defaultConfig, ...(config as any) };
  }

  public isAllowed(level: Level): boolean {
    return isAllowed(this.config.level, level);
  }

  public log({ message, level }: { message: string; level: string }): string {
    return message;
  }

  public format(value: any): string {
    return this.config.format(value);
  }

  public getMessage(info: Info): string {
    return this.config.template(info);
  }
}

export default Transport;
