import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';
import { appConfig } from './app.config';

bootstrapApplication(App, appConfig).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
});
