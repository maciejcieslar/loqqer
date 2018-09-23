import _ from 'lodash';

import Transport from './transport';
import consoleTransport from './console';
import fileTransport from './file';

const transports = { console: consoleTransport, file: fileTransport };

export { Transport };

export default transports;
