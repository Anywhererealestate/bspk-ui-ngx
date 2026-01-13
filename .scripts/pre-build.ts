/** @file All scripts related to pre-build steps */

import { generateComponentRoutes } from './generate-component-routes';
import { updateIndex } from './update-index';

generateComponentRoutes();

updateIndex();
