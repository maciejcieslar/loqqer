import _ from 'lodash';

import Transport, { TransportConfig } from './transport';
import consoleTransport from './console';
import fileTransport from './file';

const transports = { console: consoleTransport, file: fileTransport };

export { Transport, TransportConfig };

export default transports;
