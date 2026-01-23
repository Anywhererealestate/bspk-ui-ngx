/** All scripts related to pre-build steps */

import { generateComponentRoutes } from './generate-component-routes';
import { generateMeta } from './generate-meta';
import { updateIndex } from './update-index';

generateComponentRoutes();

updateIndex();
