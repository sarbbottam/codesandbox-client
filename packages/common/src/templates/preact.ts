

import Template from './template';
import { decorateSelector } from '../theme';
import configurations from './configuration';

export default new Template(
  'preact-cli',
  'Preact',
  'https://github.com/developit/preact-cli',
  'preact',
  decorateSelector(() => '#AD78DC'),
  {
    showOnHomePage: true,
    extraConfigurations: {
      '/.babelrc': configurations.babelrc,
    },
  }
);
