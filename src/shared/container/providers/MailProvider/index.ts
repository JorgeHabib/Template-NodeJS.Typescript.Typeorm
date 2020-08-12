import { container } from 'tsyringe';

import IMailProvider from './models/IMailProvider';
import EtherealMailProvider from './implementations/EtherealMailProvider';

// const providers = {
//   ethereal: EtherealMailProvider,
// };

container.registerInstance<IMailProvider>('MailProvider', container.resolve(EtherealMailProvider));
